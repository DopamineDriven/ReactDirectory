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
                <input 
                    type="search" 
                    className="form-control mr-sm-2" 
                    placeholder="name"
                    aria-label="search"
                    onChange={e => context.deltaHandler(e)}
                />
            </div>
        </div>
    )
}

export default Name;