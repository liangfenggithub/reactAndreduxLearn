import React, { Component } from "react"
import ReactJson from 'react-json-view'
class Jsonshow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      json: {
        test: "abc",
        abc: "123",
        eee: 1236,
        arr: [
          "asdf",
          "adsdfas",
          "rrrrrrrr"
        ],
        obj: {
          ljkk: "asdfa",
          mumber: 23432,
        }
      }
    }
  }
  render() {
    return <div>

      <ReactJson src={this.state.json} />

    </div>
  }
}


export default Jsonshow;