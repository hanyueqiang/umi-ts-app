import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// 设置样式
const grid = 8;
const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // 拖拽的时候背景变化
  background: isDragging ? 'lightgreen' : '#ffffff',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = () => ({
  background: '#ccc',
  padding: grid,
  width: 250,
  border: '1px solid #333',
});

const Items = [
  {
    id: '1',
    content: 'react',
  },
  {
    id: '2',
    content: 'vue',
  },
  {
    id: '3',
    content: 'angular',
  },
];

const Items2 = [
  {
    id: '11',
    content: '凯爹',
  },
  {
    id: '22',
    content: '鲁班大师',
  },
  {
    id: '33',
    content: '妲己',
  },
];

// 重新记录数组顺序
const reorder = (list: any, startIndex: number, endIndex: number) => {
  const result = JSON.parse(JSON.stringify(list));

  const [removed] = result.splice(startIndex, 1);

  result.splice(endIndex, 0, removed);
  return result;
};
// 重新记录数组顺序
const reorder2 = (list: any, destIndex: number, destId: string) => {
  const result = JSON.parse(JSON.stringify(list));
  const destObj = Items2.find(item => item.id === destId);
  if (destObj) {
    destObj.id = destObj.id + 'a1';
    result.splice(destIndex, 0, JSON.parse(JSON.stringify(destObj)));
  }

  return result;
};

const Container = () => {
  const [dataSource, setDataSource] = useState<any>(Items);
  const [dataSource2, setDataSource2] = useState<any>(Items2);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!result.destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    console.log(source.droppableId);
    console.log(destination.droppableId);
    if (
      destination.droppableId === source.droppableId &&
      destination.index !== source.index
    ) {
      const items = reorder(
        dataSource,
        result.source.index,
        result.destination.index,
      );
      setDataSource(items);
      return;
    }
    const newItems = reorder2(dataSource, destination.index, draggableId);

    setDataSource(newItems);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable2" isDropDisabled>
        {(provided, snapshot) => (
          <div
            //provided.droppableProps应用的相同元素.
            {...provided.droppableProps}
            // 为了使 droppable 能够正常工作必须 绑定到最高可能的DOM节点中provided.innerRef.
            ref={provided.innerRef}
            style={getListStyle()}
          >
            {dataSource2.map((item: any, index: number) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style,
                    )}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            //provided.droppableProps应用的相同元素.
            {...provided.droppableProps}
            // 为了使 droppable 能够正常工作必须 绑定到最高可能的DOM节点中provided.innerRef.
            ref={provided.innerRef}
            style={getListStyle()}
          >
            {dataSource.map((item: any, index: number) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style,
                    )}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Container;
