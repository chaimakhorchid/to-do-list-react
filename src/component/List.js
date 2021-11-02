import React, { Component } from 'react'

class List extends Component {
    render() {
        const {tasks, editLine} = this.props
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
                            <input value={task.description} onChange={this.modifyTask}></input>
                        <select>
                        <option>To do</option>
                        <option>Doing</option>
                        <option>Done</option>
                        </select>
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
                            <button type="submit" className="btn btn-secondary mt-4 col-4" onClick={() => this.props.setEditLine(index)}>Modifier</button>  
                        </div>
                        
                        </>
                    ))}

                </div>
            </div>
        )
    }
} 
export default List