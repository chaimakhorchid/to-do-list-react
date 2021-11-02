import React, { Component } from 'react'


class Form extends Component {
    constructor(){
        super();

        this.state = {
            task: ""
        }
    
    this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTaskDescriptionChange(e){
        this.setState({ task:e.target.value })
        }
    
    handleSubmit(e){
        e.preventDefault()
        this.props.addTask(this.state.task)
    }

    reset() {
        this.setState({task: ""});
    }

    render() {
        return (
            <div className="container">
                    <>
                <h1>To Do List</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3 row col-8">
                        <label className="form-label"></label>
                        <input type="list" className="form-control"  value={this.state.task} aria-describedby="list" onChange={this.handleTaskDescriptionChange}/>
                        <button type="submit" className="btn btn-primary mt-4 col-4">Ajouter à ma liste</button>
                    </div>
                </form>
                </>
                
            </div>
        )
    }
}
export default Form
