import React from "react";
import TodoItem from "./todo-item";

class TodoList extends React.Component{  
    render = () => {
        return (
            <ul  className="todo-list" >
            {                
                this.props.todos.map((todoItem, idx) =>(
                <TodoItem key={todoItem.key} todo={todoItem.action} status={todoItem.status} changeStatus={this.props.changeStatus}
                delTodo={this.props.delTodo} index={idx} todoKey={todoItem.key} updateTodo={this.props.updateTodo}>
                </TodoItem>))
            }
            </ul>
        )
    }
}

export default TodoList;