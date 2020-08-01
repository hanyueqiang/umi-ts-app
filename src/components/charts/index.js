import React, { Component } from 'react';

export default class Charts_component extends Component {
  chart = null;

  containerWidth = '';

  resizeTimer = null;

  async render_chart() {
    const { options = {} } = this.props;
    const opts = await options;
    let chartOptions = {
      grid: {
        top: 50,
        bottom: 40,
        left: 50,
        right: 50,
        containLabel: true,
      },
      toolbox: {
        show: false,
      },
      ...opts,
    };

    return chartOptions;
  }

  draw() {
    if (!this.container) return;
    let timer = setTimeout(async () => {
      if (!this.container) return;
      const e = await import('echarts');
      // import('echarts/map/js/china').then(async _ => {
      if (!this.chart) {
        this.chart = e.init(this.container);
        if (this.props.bindEvents) {
          this.props.bindEvents(this.chart);
        }
        if (this.props.bindTriggerEvent) {
          this.props.bindTriggerEvent(this.chart);
        }
      }
      let chartOptions = await this.render_chart();
      this.chart.setOption(chartOptions);
      //window.onresize = this.chart.resize;
      window.addEventListener('resize', () => {
        this.chart.resize();
      });
      if (this.container.clientWidth != this.containerWidth)
        this.containerWidth = this.container.clientWidth;
      // })
    }, 500);
  }

  componentDidUpdate() {
    this.draw();
  }

  componentDidMount() {
    this.props.onEchart && this.props.onEchart(this.container);
    this.draw();
  }

  getWidth() {
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = null;
    }
    this.resizeTimer = setTimeout(() => {
      if (this.container && this.containerWidth != this.container.clientWidth) {
        this.containerWidth = this.container.clientWidth;
        this.chart && this.chart.resize();
      }
    }, 500);
  }

  shouldComponentUpdate(nextProps) {
    let oOpts = JSON.stringify(this.props.options);
    let nOpts = JSON.stringify(nextProps.options);
    this.getWidth();
    return oOpts != nOpts;
  }

  render() {
    return (
      <div>
        <div
          ref={container => {
            this.container = container;
          }}
          className={'container ' + (this.props.className || '')}
        />
        {this.props.bindTriggerEvent && <div className="x-axis-tip"></div>}
      </div>
    );
  }
}
