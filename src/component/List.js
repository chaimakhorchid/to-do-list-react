import React, { Component } from 'react'

class List extends Component {
    constructor(){
        super()
        this.state = {
            editLine:null,
            editDescription: ""

        }
        this.setEditLine = this.setEditLine.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    setEditLine(index){
        this.setState({editLine: index, editDescription: this.props.tasks[index].description})
    
      }

    handleDescriptionChange(e){
        this.setState({ editDescription:e.target.value })
    }

    
    render() {
        const {tasks} = this.props
        const editLine = this.state.editLine
        return (
            <div className="container" onSubmit={this.handleSubmit}>
                <h1>List</h1>
                <div className="row">
                    {tasks.map( (task,index) => (
                        <>
                        <div className="col-6">
                        <label>Description</label>
                        {editLine === index ? (
                            <>
                            <input value={this.state.editDescription} onChange={this.handleDescriptionChange}></input>
                        <select>
                        <option>To do</option>
                        <option>Doing</option> 
                        <option>Done</option>
                        </select>
                        <button type="submit" className="btn btn-success mt-4 col-4">Valider</button>
                           </>     
                            ) : (
                            <p>{task.description}</p>
                            )}
                        </div>
                        <div className="col-2">
                            <label>Status</label>
                            <p>{task.status}</p>
                        </div>
                        <div className="col-4">
                            <button type="submit" className="btn btn-danger mt-4 col-4" onClick={() => this.props.deleteTask(index)}>Supprimer</button>
                            <button type="submit" className="btn btn-secondary mt-4 col-4" onClick={() => this.setEditLine(index)}>Modifier</button>  
                        </div>
                        
                        </>
                    ))}

                </div>
            </div>
        )
    }
} 
export default List