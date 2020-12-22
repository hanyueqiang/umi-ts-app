import React, { useState, useEffect, useRef } from 'react';
import GGEditor, { Flow } from 'gg-editor';
import Toolbar from './components/Toolbar';
import CustomNodes from './components/CustomNodes';
import { editorSource } from './ggEditor.config';
import styles from './index.less';

const GGEditorComp = () => {
  const [graphData, setGraphData] = useState<any>(editorSource);
  const graphRef = useRef<any>(null);

  useEffect(() => {
    console.log(graphRef.current);
  }, []);

  const save = () => {
    if (graphRef.current.graph) {
      const data = graphRef.current.graph.save();
      console.log(data);
    }
  };

  const resetZoom = () => {
    graphRef.current.graph.zoomTo(1);
  };

  const handleNodeClick = (e: any) => {
    const nodeItem = e.item;
    console.log(nodeItem);
  };

  return (
    <GGEditor className={styles.editor}>
      <Toolbar onSave={save} onResetZoom={resetZoom} />
      <Flow
        ref={graphRef}
        className={styles.editorBd}
        data={graphData}
        graphConfig={{
          maxZoom: 3,
          minZoom: 0.3,
        }}
        onNodeClick={handleNodeClick}
      />
      <CustomNodes />
    </GGEditor>
  );
};

export default GGEditorComp;
