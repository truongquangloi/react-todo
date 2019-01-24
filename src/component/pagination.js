import React from "react";

import PageNumber from "./page-number";

class Pagination extends React.Component{
    render = () => {
        return (
            <div className="pagination">
                <PageNumber pageNumbers={this.props.pageNumbers}></PageNumber>
            </div>
        )
    }

}

export default Pagination;
