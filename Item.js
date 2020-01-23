import React from 'react'


class Item extends React.Component {
  render () {
    const {title, handleDelete, handleEdit} = this.props
    return (
      <li className="item">
        <h3>{title}</h3>
        <button className="edit-button" onClick = {handleEdit}>Edit</button>
        <button className="delete-button" onClick = {handleDelete}>Delete</button>
      </li>
    )
  }
}

export default Item;
