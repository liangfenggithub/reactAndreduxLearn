import React, { Component } from "react"
import Pie from "../../Component/Pie.js"
import Line from "../../Component/Line.js"
class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieData: [ //饼图数据
        {
          name: "河北",
          value: 20,
        },
        {
          name: "天津",
          value: 20,
        },
        {
          name: "唐山",
          value: 20,
        },
        {
          name: "北京",
          value: 20,
        },

      ],
      lineData: [//折线图数据

      ]
    }

  }
  render() {
    return (
      <div>
        <Pie
          data={this.state.pieData}
          height={"300px"}
          width={"50%"}
        >
        </Pie>


        <Line
          data={this.state.lineData}
          height={"300px"}
          width={"50%"}
        >

        </Line>
      </div >
    )
  }
}
export default Chart