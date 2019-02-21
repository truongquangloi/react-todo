import React from "react";

class PageNumber extends React.Component{
    handleClick = (e) => {
        this.props.changeCurrentPage(e.target.getAttribute('id'));
    };
    render = () => {
        return (
            <ul>
            {
                this.props.pageNumbers.map((number) => 
                    this.props.currentPage == number ? 
                        (<li key={number} id={number} onClick={this.handleClick}  className="current" >{number}</li>)                  
                        : (<li key={number} id={number} onClick={this.handleClick} >{number}</li>)    
                                  
                )
            }
            </ul>
        )
    }
}

export default PageNumber;
