import React from 'react';

const Pagination = (props) => {
    return (
        <div className="row">
            <div className="pagination">
                <div className="pagination-left">
                    <span className="pagination-icon nextPage" onClick={() => {
                            if (props.page > 0) {
                                props.setPage(0)
                            }
                        }}>
                            &lt;&lt;
                    </span>
                        <span className="pagination-icon nextPage" onClick={() => {
                            if (props.page > 0) {
                                props.setPage(props.page - 1)
                            }
                        }}>
                            &lt;
                    </span>
                </div>
                    
                <div className="pagination-center">
                    <span className="pagination-text">
                        Page {props.page + 1} of {props.totalPages}
                    </span>
                </div>
                
                <div className="pagination-right">
                    <span className="pagination-icon nextPage" onClick={() => {
                            if (props.page < props.totalPages-1) {
                                props.setPage(props.page + 1)
                            }
                        }}>
                            &gt;
                    </span>

                    <span className="pagination-icon nextPage" onClick={() => {
                            if (props.page < props.totalPages-1) {
                                props.setPage(props.totalPages-1)
                            }
                        }}>
                            &gt;&gt;
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Pagination;