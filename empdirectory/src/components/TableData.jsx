import React, { useContext } from 'react';
import TableBody from './TableBody.jsx';
import TableAreaContext from '../utils/TableAreaContext.js';

const TableData = () => {
    const context = useContext(TableAreaContext)

    return (
        <div className="datatable mt-5">
            <table className="table-striped table-hover table-condensed">
                <thead>
                    <tr>
                        {context.developerState.headings.map(({ name, width }) => {
                            return (
                                <th 
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    // onClick handle sort by name function
                                    onClick={() => {
                                        context.handleSort(name)
                                    }}
                                >
                                    {name}
                                    <span className="pointer" />
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <TableBody />
            </table>
        </div>
    )
}

export default TableData;