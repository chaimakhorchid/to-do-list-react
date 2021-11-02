import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './component/Form'
import List from './component/List'

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      tasks: [], 
      editLine: null
    }

   

  this.addTask = this.addTask.bind(this);
  this.deleteTask = this.deleteTask.bind(this);
  this.setEditLine = this.setEditLine.bind(this);
  }
  
  addTask(task){
    this.setState({tasks:[{ description: task, status: "To do" },...this.state.tasks]})
    console.log(task)
  }

  deleteTask(index){
    this.state.tasks.splice(index, 1)
    this.setState({tasks:this.state.tasks})

  }
  
  setEditLine(index){
    this.setState({editLine: index})

  }


  render() {
    return (
      <div>
        <Form addTask={this.addTask} />
        <List tasks={this.state.tasks} deleteTask={this.deleteTask} setEditLine={this.setEditLine} editLine={this.state.editLine}/>
      </div>
    )
  } 
}
export default App

