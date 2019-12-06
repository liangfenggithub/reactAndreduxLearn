import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入环形图
import 'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'; //提示框组件
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';

export default class Pie extends Component {
  constructor(props) {
    super(props);
    this.chartDom = null;//echart要挂载的dom节点

  }

  initCharts = () => {
    const data = this.props.data;
    var piedata = data.map((item, index) => {
      return {
        value: item.value,//item.y,   //value和name是echarts规定的，呜呜呜
        name: item.name//item.x,
      };
    });
    // 基于准备好的dom，初始化echarts实例
    //可以使用id，但是有可能会重复
    // var myChart = echarts.init(document.getElementById('main'));
    //也可以使用react的ref，防止id重复
    let myChart = echarts.init(this.chartDom);
    // 绘制图表
    myChart.setOption({
      tooltip: {
        trigger: 'item',
        // formatter: "{a} <br/>{b}: {c} ({d}%)"
        formatter: '{b}:   {d}%',
      },
      series: [//系列图表
        {
          name: '设备占比数量',
          type: 'pie',
          radius: ['50%', '60%'],
          label: {
            formatter: '{b}:{d}%',
            textStyle: {
              color: '#000000',
              fontSize: 12,
            },
          },
          data: piedata,
        },
      ]
    });
  };

  componentDidMount() {
    this.initCharts();
  }
  componentDidUpdate() {  //当图表切换的时候，重新执行
    this.initCharts();
  }
  render() {
    return <div
      id="main"
      style={{ width: this.props.width, height: this.props.height }}
      ref={(element) => {
        this.chartDom = element;
      }}
    />;
  }
}