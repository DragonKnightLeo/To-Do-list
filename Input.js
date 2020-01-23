import React from 'react'

class Input extends React.Component {
  render () {
    const {item, handleChange, handleSubmit, editItem} = this.props
    return (
      <div className="card">
        <form onSubmit = {handleSubmit}>
          <div className="group">
            <input className="input-task"
                type="text"
                placeholder="Enter Task"
                value = {item}
                onChange={handleChange} />
            <span className="highlight"></span>
            <span className="bar"></span>
          </div>
          <button className="btn first" type="submit">{editItem ? 'Edit Task' : "Add Task"}</button>
        </form>
      </div>
    )
  }
}

export default Input;
