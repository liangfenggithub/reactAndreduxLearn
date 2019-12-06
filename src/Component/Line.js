import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入折线
import "echarts/lib/chart/line"
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'; //提示框组件
import 'echarts/lib/component/title';
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
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
      title: {  //标题
        text: '折线图一', //主标题文本，支持\n换行
        x: 'center',//x 在x位置
        textStyle: { //字体颜色
          color: '#ccc'
        }
      },
      tooltip: { //提示框组件
        trigger: 'axis' //触发类型，
      },
      legend: { //图例
        // orient: 'vertical',
        top: 20,
        right: 50,
        data: ['订单量', "发货量", '不良品量']
      },
      xAxis: { //X轴坐标值
        // boundaryGap: false, //是否保留边界间隙
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
      },
      yAxis: { //y轴
        type: 'value' //数值轴，适用于连续数据
      },
      series: [ //系列图表，每个系列通过type决定自己的图表类型， //多条折线则对成员
        {
          name: '订单量', //坐标点名称
          type: 'line', //线类型
          data: [1000, 1500, 2000, 3000, 2500, 1800, 1200], //坐标点数据
          // areaStyle: {} //单线还是区域，去掉是单线，保留是区域
        },

        {
          name: '发货量',
          type: 'line',
          data: [1000, 1800, 2200, 3100, 2200, 1500, 1000]
        },
        {
          name: "不良品量",
          type: 'line',
          data: [300, 800, 1200, 1800, 1300, 600, 200]
        }
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