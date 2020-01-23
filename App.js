import React, { Component } from 'react';
import './App.css';
import Input from "./components/Input"
import List from "./components/List"
class App extends Component {
  state = {
    items: [],
    id: 0,
    item: '',
    editItem: false
  }
  handleChange = (event) => {
    this.setState({
      item: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item:'',
      id: Math.floor(Math.random() * 1000000),
      editItem: false
    })
  }
  clearList = () => {
    this.setState({
      items:[]
    })
  }
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item =>
       item.id !== id)
       this.setState({
         items: filteredItems
       })
  }
  handleEdit = (id) => {
       const filteredItems = this.state.items.filter(item =>
       item.id !== id)

       const selectedItem = this.state.items.find(item => item.id === id);

       this.setState({
         items: filteredItems,
         item: selectedItem.title,
         editItem: true,
         id: id

       })
  }
  render() {
    return (
      <div>
        <h1 className = "title">Input Task</h1>
        <Input item = {this.state.item}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          editItem = {this.state.editItem}/>
        <List
          items = {this.state.items}
          clearList = {this.clearList}
          handleDelete = {this.handleDelete}
          handleEdit = {this.handleEdit} />
      </div>
    );
  }
}

export default App;
