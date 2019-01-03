import React, {Component} from "react";

class TodoItem extends Component{
    delete = (e) => {
        var index = e.target.getAttribute('index');
        this.props.delTodo(index);
    }
    render() {
        return (
            <li>{this.props.todo}<button  onClick={this.delete} index={this.props.index}>X</button></li>
        )
    }
}

export default TodoItem;