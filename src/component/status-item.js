import React from "react";

class StatusItem extends React.Component{
    render = () => {        
        return (<option value={this.props.status} todo-index={this.props.todoIndex}>{this.props.status}</option>)
    }
}
export default StatusItem;