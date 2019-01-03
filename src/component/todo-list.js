import React from "react";
import TodoItem from "./todo-item";

class TodoList extends React.Component{

    render(){
        return (
            <ul>{this.props.todos.map((todoItem) =>(<TodoItem key={todoItem} todo={todoItem} delToto={this.delTodo}></TodoItem>)) }</ul>
        )
    }
}

export default TodoList;