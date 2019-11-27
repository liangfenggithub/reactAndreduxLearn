import React from "react"

import "./todolist.css"
class List extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>
      <ul className="list">

        {this.props.list.map((item) => {
          return <li className="nopoint line">
            <div className="left">
              <span>
                {item.id} -
              </span>
              <span style={{ textDecoration: item.complate == true ? 'line-through' : "none" }}>
                {item.content}
              </span>
            </div>
            <div className="right">
              <input type="checkbox" onClick={this.props.complate.bind(this, item.id)} />
              <span className="margin10" onClick={this.props.delete.bind(this, item.id)}>x</span>
            </div>
          </li>
        })}
      </ul>

    </div >

  }
}

export default List