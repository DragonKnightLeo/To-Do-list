import React from 'react'
import Item from "./Item"

class List extends React.Component {
  render () {
    const {items, clearList, handleDelete, handleEdit } = this.props
    return (
      <ul>
        <h3 className="list-title">Task List</h3>
        {items.map(item => {
          return (
            <Item
              key = {item.id}
              title = {item.title}
              handleDelete = {() => handleDelete(item.id)}
              handleEdit = {() => handleEdit(item.id)}/>
          )
        })}
        <button className="button last" type="button" onClick = {clearList}>Clear List</button>
      </ul>
    )
  }
}

export default List;
