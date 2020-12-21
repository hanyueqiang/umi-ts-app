// import React, { useState, useEffect, useRef } from 'react'
// import GGEditor, { Flow } from 'gg-editor'
// import Toolbar from './components/Toolbar'
// import CustomNodes from './components/CustomNodes'
// import styles from './index.less'

// const initData = {
//   "nodes": [],
//   "edges": []
// }

// const GGEditorComp = () => {
//   const [graphData, setGraphData] = useState(initData)
//   const graphRef = useRef<any>(null)

//   useEffect(() => {
//     console.log(graphRef.current)
//   }, [])

//   const save = () => {
//     if (graphRef.current.graph) {
//       const data = graphRef.current.graph.save()
//       console.log(data);
//     }
//   }

//   const resetZoom = () => {
//     graphRef.current.graph.zoomTo(1)
//   }

//   const handleNodeClick = (e: any) => {
//     const nodeItem = e.item;
//     console.log(nodeItem);
//   }

//   return (
//     <GGEditor className={styles.editor}>
//       <Toolbar onSave={save} onResetZoom={resetZoom} />
//       <Flow
//         ref={graphRef}
//         className={styles.editorBd}
//         data={graphData}
//         graphConfig={{
//           maxZoom: 3,
//           minZoom: 0.3
//         }}
//         onNodeClick={handleNodeClick}
//       />
//       <CustomNodes />
//     </GGEditor >
//   )

// }

// export default GGEditorComp

import React, { Component } from 'react';
import GGEditor, { Flow } from 'gg-editor';
import Toolbar from './components/Toolbar';
import CustomNodes from './components/CustomNodes';
import styles from './index.less';

class componentName extends Component {
  graphRef: any;
  graph: any;
  data1: any;
  constructor(props: any) {
    super(props);
    this.graphRef = React.createRef();
    this.graph = null;
    this.data1 = {
      nodes: [],
      edges: [],
    };
  }
  componentDidMount() {
    this.graph = this.graphRef.current.graph;
  }
  save = () => {
    const data = this.graph.save();
    console.log(data);
  };
  resetZoom = () => {
    this.graph.zoomTo(1);
  };
  handleNodeClick = (e: any) => {
    const nodeItem = e.item;
    console.log(nodeItem);
  };

  render() {
    return (
      <GGEditor className={styles.editor}>
        <Toolbar onSave={this.save} onResetZoom={this.resetZoom} />
        <Flow
          ref={this.graphRef}
          className={styles.editorBd}
          data={this.data1}
          graphConfig={{
            maxZoom: 3,
            minZoom: 0.3,
          }}
          onNodeClick={this.handleNodeClick}
        />
        <CustomNodes />
      </GGEditor>
    );
  }
}

export default componentName;
