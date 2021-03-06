import React from "react";

class AddTodo extends React.Component{
    todoSubmit = (e) => {
        e.preventDefault();
        var newValue = e.target.elements.todoName.value;   
        this.props.addTodo(newValue);   
    }
    render(){
        return(
            <div className="add-todo">
                <form onSubmit={this.todoSubmit}>
                    <input type="text" name="todoName"></input>
                    <button type="submit" className="btn-add">OK</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;