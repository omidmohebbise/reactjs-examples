import React from 'react'
import {
    Pagination,
    PaginationItems,
    PaginationItem,
    PaginationControls
} from "stateful-pagination";


export default class MyPagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activePage: 15
        };
        this.handlePageChange = this.handlePageChange.bind(this)

    }

    handlePageChange(pageNumber) {
       console.log(pageNumber)
    }

    render() {
        return (
            <div>
                <Pagination itemsPerPage={10} pageCount={5} onPageChange={(e)=>this.handlePageChange(e)}>
                    <PaginationItems>
                        <PaginationItem>
                            <div>1</div>
                        </PaginationItem>
                        <PaginationItem>
                            <div> 2</div>
                        </PaginationItem>
                        <PaginationItem>
                            <div> 3</div>
                        </PaginationItem>
                        <PaginationItem>
                            <div> 4</div>
                        </PaginationItem>
                    </PaginationItems>
                    <PaginationControls prevLabel="back" maxButtons={5}/>
                </Pagination>
            </div>
        );
    }
}