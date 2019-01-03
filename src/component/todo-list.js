import React from "react";
import TodoItem from "./todo-item";

class TodoList extends React.Component{
    render(){
        return (
            <ul>{this.props.todos.map((todoItem, idx) =>(<TodoItem key={todoItem} todo={todoItem} delTodo={this.props.delTodo} index={idx}></TodoItem>)) }</ul>
        )
    }
}

export default TodoList;