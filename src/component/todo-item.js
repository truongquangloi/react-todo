import React, {Component} from "react";
import StatusItem from "./status-item";
import Modal from "react-modal";

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

class TodoItem extends Component{
    state = {
        mode: 'view',
        value: this.props.todo,
        statuses: ['todo', 'inprogress', 'done', 'cancel'],
        modalIsOpen: false,
        status: this.props.status
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }
    
    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
    }
    
    closeModal = () => {
        this.setState({modalIsOpen: false});
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
        var status = this.state.status;
        this.props.updateTodo(index, value, status);
    }
    chooseStatus = (e) => {
        var newStatus = (e.target.value);        
        this.state.status = newStatus;
    }
    change = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render = () => {
        return (
            <li>
                { this.state.mode == 'view' ?
                    (<span>
                        <span> {this.props.todo} </span>
                        <small onClick={this.changeModeStatus}> {this.props.status} </small>
                    </span>)
                    : (<span>
                        <input value={this.state.value} name="todoEdit" onChange={this.change} />
                        <select name="status" onChange={this.chooseStatus}>
                            {
                            this.state.statuses.map((status, idx) =>(
                            <StatusItem key={status} status={status} index={idx} todoIndex={this.props.index} >
                            </StatusItem>))
                            }
                        </select>
                    </span>)
                }
                <div className="pull-right">   
                    <button  onClick={this.delete} index={this.props.index}>X</button>
                    { this.state.mode == 'view' && 
                        <button index={this.props.index} onClick={this.edit} value={this.props.todo}>Edit</button> 
                    }
                    { this.state.mode == 'edit' &&
                        <button index={this.props.index} onClick={this.save} value={this.props.todo}>Save</button> 
                    }
                </div> 
            </li>
        )
    }
}

export default TodoItem;