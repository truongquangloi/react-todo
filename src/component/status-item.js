import React from "react";

class StatusItem extends React.Component{
    render = () => {        
        return (<option value={this.props.status}>{this.props.status}</option>)
    }
}
export default StatusItem;