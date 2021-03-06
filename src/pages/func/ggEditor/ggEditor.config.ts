const editorSource = {
  nodes: [
    {
      center: 'topLeft',
      id: '8e8e0ed8',
      label: '用户A',
      shape: 'robotNode',
      size: [80, 40],
      style: {},
      type: 'bizFlowNode',
      x: 261.5,
      y: 23.5,
    },
    {
      center: 'topLeft',
      id: 'cded2636',
      label: '用户B',
      shape: 'userNode',
      size: [80, 40],
      style: {},
      type: 'bizFlowNode',
      x: 370.5,
      y: 122.5,
    },
    {
      center: 'topLeft',
      id: 'd3381f68',
      label: '用户B',
      shape: 'userNode',
      size: [80, 40],
      style: {},
      type: 'bizFlowNode',
      x: 153.5,
      y: 121.5,
    },
  ],
  edges: [
    {
      style: {},
      target: 'cded2636',
      targetAnchor: 0,
      type: 'bizFlowEdge',
      startPoint: {
        id: '301.5-65.5',
        index: 1,
        x: 301.5,
        y: 65.5,
      },
      id: '99ce2c57',
      source: '8e8e0ed8',
      sourceAnchor: 1,
      endPoint: {
        id: '410.5-118.5',
        index: 0,
        x: 410.5,
        y: 118.5,
      },
    },
    {
      style: {},
      target: 'd3381f68',
      targetAnchor: 0,
      type: 'bizFlowEdge',
      startPoint: {
        id: '301.5-65.5',
        index: 1,
        x: 301.5,
        y: 65.5,
      },
      id: '4c16178d',
      source: '8e8e0ed8',
      sourceAnchor: 1,
      endPoint: {
        id: '193.5-117.5',
        index: 0,
        x: 193.5,
        y: 117.5,
      },
    },
  ],
};

export { editorSource };
