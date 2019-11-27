import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { increment, decrement } from "../actions/counter.js"

class Counter extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="number">
          Counter number is:
          {
            this.props.counter
          }
        </div>
        <div>
          <button onClick={this.props.increment}>增加+</button>
          <button onClick={this.props.decrement}>减少—</button>

        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    counter: state.counterReducer
  }
}

const mapDisPatchToProps = dispatch => {
  return bindActionCreators({
    increment,
    decrement,
  }, dispatch)
}
export default connect(mapStateToProps, mapDisPatchToProps)(Counter);