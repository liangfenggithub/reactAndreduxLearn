import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入折线
import "echarts/lib/chart/bar"
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'; //提示框组件
import 'echarts/lib/component/title';
import "echarts/lib/component/legend";
import "echarts/lib/component/markPoint";
import 'echarts/lib/component/visualMap';

export default class Bar extends Component {
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
        text: '柱状图一', //主标题文本，支持\n换行
        x: 'center',//x 在x位置
        textStyle: { //字体颜色
          color: '#ccc'
        }
      },
      xAxis: { //X轴坐标值
        // boundaryGap: false, //是否保留边界间隙
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: { //y轴
      },
      series: [ //系列图表，每个系列通过type决定自己的图表类型， //多条折线则对成员
        {
          name: '销量', //坐标点名称
          type: 'bar', //线类型
          data: [5, 20, 36, 10, 10, 20], //坐标点数据
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
