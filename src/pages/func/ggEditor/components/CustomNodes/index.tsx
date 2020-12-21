import React from 'react';
import { RegisterNode } from 'gg-editor';

const CustomNodes = () => {
  return (
    <>
      <RegisterNode
        name="userNode"
        config={{
          getCustomConfig() {
            return {
              size: [80, 40],
              wrapperStyle: {
                fill: '#2b6dd7',
              },
              contentStyle: {
                fill: '#4d8ff9',
              },
              labelStyle: {
                fill: '#FFFFFF',
              },
            };
          },
        }}
        extend="bizFlowNode"
      />
      <RegisterNode
        name="robotNode"
        config={{
          getCustomConfig() {
            return {
              size: [80, 40],
              wrapperStyle: {
                fill: '#d68c0a',
              },
              contentStyle: {
                fill: '#f8ae2c',
              },
              labelStyle: {
                fill: '#FFFFFF',
              },
            };
          },
          draw(model: any, group: any) {
            const keyShape = group.addShape('rect', {
              draggable: true,
              className: 'node-wrapper',
              attrs: {
                x: 0,
                y: -4,
                width: 80,
                height: 44,
                fill: '#d68c0a',
                radius: 8,
              },
            });
            group.addShape('rect', {
              draggable: true,
              className: 'node-content',
              attrs: {
                x: 0,
                y: 0,
                width: 80,
                height: 40,
                fill: '#f8ae2c',
                radius: 6,
              },
            });
            group.addShape('text', {
              className: 'node-label',
              attrs: {
                x: 50,
                y: 20,
                text: model.label,
                fill: '#FFFFFF',
                textAlign: 'center',
                textBaseline: 'middle',
              },
            });
            group.addShape('image', {
              attrs: {
                img:
                  'https://gw.alipayobjects.com/zos/basement_prod/4f81893c-1806-4de4-aff3-9a6b266bc8a2.svg',
                x: 5,
                y: 12,
                width: 20,
                height: 16,
              },
            });

            return keyShape;
          },
        }}
        extend="bizFlowNode"
      />
    </>
  );
};

export default CustomNodes;
