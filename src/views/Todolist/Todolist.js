import React from "react"
import InputTodo from "./InputTodo.js"
import List from "./List.js"
import Footer from "./Footer.js"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { complateitem, removeitem, additem, edititem } from "../../actions/todolist"
import "./todolist.css"
import { filterOption } from "../../canstants"

class Todolist extends React.Component {
  constructor(props) {
    super(props)
  }

  getTodoList = (state) => {
    switch (state.filter) {
      case filterOption.SHOW_ALL:
        return state.list
      case filterOption.SHOW_COMPLATE:
        return state.list.filter(item => item.complate)
      case filterOption.SHOW_TODO:
        return state.list.filter(item => !item.complate)
      default: return state.list
    }
  }

  render() {
    return <div className="main">
      <InputTodo
        additem={this.props.additem}
      >
      </InputTodo>

      <List
        list={this.getTodoList(this.props.state)}
        complate={this.props.complateitem}
        delete={this.props.removeitem}
      >
      </List>


      <Footer>
      </Footer>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    state: state.todolistReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    additem,
    edititem,
    complateitem,
    removeitem,
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist)


