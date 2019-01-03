import React, {Component} from "react";

class TodoItem extends Component{
    constructor(props) {
        super(props);
    }
    delete(key) {
        console.log(this);
        this.props.delTodo(key);
    }
    render() {
        return (
            <li onClick={() => this.delete(this.props.todo) }>{this.props.todo}</li>
        )
    }
}

export default TodoItem;