import React from "react";

class PageNumber extends React.Component{
    handleClick = () => {
        console.log('here');
    };
    render = () => {
        return (
            <ul>
            {
                this.props.pageNumbers.map((number) => {
                    <li key={number} id={number} onClick={this.handleClick}>{number}</li>
                })
            }
            </ul>
        )
    }
}

export default PageNumber;
