import React, { useContext } from 'react';
import TableAreaContext from '../utils/TableAreaContext.js';

const DOB = () => {
    const context = useContext(TableAreaContext);

    return (
        <div className="searchbox">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        DOB
                    </span>
                </div>
                <input 
                    type="date" 
                    className="form-control"
                    onChange={e => context.deltaHandler(e)}
                />
                <input 
                    type="date" 
                    className="form-control"
                    onChange={e => context.deltaHandler(e)}
                />
            </div>
        </div>
    )
};

export default DOB;