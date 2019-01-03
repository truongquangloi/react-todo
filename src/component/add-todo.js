import React from "react";

class AddTodo extends React.Component{
    todoSubmit = (e) => {
        e.preventDefault();
        var newTodo = e.target.elements.todoName.value;   
        this.props.addTodo(newTodo);   
    }
    render(){
        return(
            <div>
                <form onSubmit={this.todoSubmit}>
                    <input type="text" name="todoName"></input>
                    <button type="submit">OK</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;