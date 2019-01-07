import React from "react";

class StatusItem extends React.Component{
    chooseStatus= (e) => {
        var newStatus = e.target.getAttribute('value');        
        var todoIndex = e.target.getAttribute('todo-index');
        this.props.changeStatus(newStatus, todoIndex);
        this.props.changeModeEdit();
    }
    render = () => {        
        return (<li onClick={this.chooseStatus} value={this.props.status} todo-index={this.props.todoIndex}>{this.props.status}</li>)
    }
}
export default StatusItem;