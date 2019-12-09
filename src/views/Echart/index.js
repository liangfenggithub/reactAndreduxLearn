import React, { Component } from "react"
import Pie from "../../Component/Pie.js"
import Line from "../../Component/Line.js"
import Bar from "../../Component/Bar.js"
import { Row, Col, Card } from "antd"
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

      ],
      barData: [],
    }

  }
  render() {
    return (
      <div>

        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" >
              <Pie
                data={this.state.pieData}
                height={"300px"}
                width={"100%"}
              >
              </Pie>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" >
              <Line
                data={this.state.lineData}
                height={"300px"}
                width={"100%"}
              >
              </Line>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" >
              <Bar
                data={this.state.barData}
                height={"300px"}
                width={"100%"}
              >
              </Bar>
            </Card>
          </Col>
        </Row>

      </div >
    )
  }
}
export default Chart
