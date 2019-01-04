import React, {Component} from "react";

class TodoItem extends Component{
    state = {
        mode: 'view',
        value: this.props.todo,
    }
    delete = (e) => {
        var index = e.target.getAttribute('index');
        this.props.delTodo(index);
    }
    edit = (e) => {
        this.setState (() => {
            return { mode : 'edit'}
        });

    }
    save = (e) => {
        this.setState (() => {
            return { mode : 'view'}
        });
        var index = e.target.getAttribute('index');
        var value = this.state.value;
        this.props.updateTodo(value, index);
    }

    change = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render = () => {
        return (
            <li>
                { this.state.mode == 'view' && 
                    <span> {this.props.todo} </span> 
                }
                { this.state.mode == 'edit' && 
                    <input value={this.state.value} name="todoEdit" onChange={this.change} />
                }
                <button  onClick={this.delete} index={this.props.index}>X</button>
                { this.state.mode == 'view' && 
                    <button index={this.props.index} onClick={this.edit} value={this.props.todo}>Edit</button> 
                }
                { this.state.mode == 'edit' &&
                    <button index={this.props.index} onClick={this.save} value={this.props.todo}>Save</button> 
                }
            </li>
        )
    }
}

export default TodoItem;