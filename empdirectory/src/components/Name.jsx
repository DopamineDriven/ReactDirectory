import React, { useContext } from 'react';
import TableAreaContext from '../utils/TableAreaContext.js';

const Name = () => {
    const context = useContext(TableAreaContext)

    return (
        <div className="searchbox">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        Search Here
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Name;