import React from 'react';

class Table extends React.Component {
    render() {
        
        const {theads, ordering, handleSorting} = this.props;

        const tHead = theads.map((head, index) => {
            return (
                    <th key={index} className={head.className && head.className} id={head.name} onClick={handleSorting}>
                        {head.value}
                        <div className={`table-sorting ${ ordering.type === head.name && 'active' }`} >
                            { 
                                ordering.type === head.name ?
                                    (<i className={`mdi mdi-${ ordering.sort === 'asc' ? 'sort-ascending' : 'sort-descending' }`}></i>)
                                :
                                    (<i className="mdi mdi-sort"></i>)
                            }
                            
                            </div>
                    </th>
            )
        })

        return (
            <table className="table table-primary table-bordered table-hover mt-20 table-custom">
                <thead>
                    <tr>
                        {tHead}
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        )
    }
}

export default Table;