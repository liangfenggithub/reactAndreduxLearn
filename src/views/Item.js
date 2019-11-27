import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { createItemAsyn, updateItemAsyn, readItemAsyn, deleteItemAsyn } from "../actions/item"

class Item extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>
      <button onClick={() => { this.props.createItemAsyn("啦啦啦") }}>增</button>
      <button onClick={() => { this.props.deleteItemAsyn(2) }}>删</button>
      <button onClick={() => { this.props.readItemAsyn(5) }}>查</button>
      <button onClick={() => { this.props.updateItemAsyn(1, "哈哈哈") }}>改</button>
      <div>
        message:
        {
          this.props.state.message
        }
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.itemReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createItemAsyn,
    updateItemAsyn,
    readItemAsyn,
    deleteItemAsyn
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)