import React from "react";

import PageNumber from "./page-number";

class Pagination extends React.Component{
    render = () => {
        return (
            <div className="pagination">
                <PageNumber pageNumbers={this.props.pageNumbers} currentPage={this.props.currentPage} changeCurrentPage={this.props.changeCurrentPage}></PageNumber>
            </div>
        )
    }

}

export default Pagination;
