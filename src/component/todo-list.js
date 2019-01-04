import React from "react";
import TodoItem from "./todo-item";

class TodoList extends React.Component{    
    render = () => {
        console.log(this.props.todos);
        return (
            <ul>
            {
                this.props.todos.map((todoItem, idx) =>(
                <TodoItem key={todoItem} todo={todoItem.action} status={todoItem.status}
                delTodo={this.props.delTodo} index={idx} updateTodo={this.props.updateTodo}>
                </TodoItem>))
            }
            </ul>
        )
    }
}

export default TodoList;