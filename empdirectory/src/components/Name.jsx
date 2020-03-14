import React, { useContext } from 'react';
import TableAreaContext from '../utils/TableAreaContext.js';
import '../styles/Name.css';

const Name = () => {
    const context = useContext(TableAreaContext)

    return (
        <div className="searchbox">
            <form className="input-group input-group-lg">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                    <i class="fas fa-search"></i>
                    </span>
                </div>
                <input 
                    type="search" 
                    className="form-control mr-sm-2" 
                    placeholder="search by name"
                    aria-label="search"
                    onChange={e => context.deltaHandler(e)}
                />
            </form>
        </div>
    )
}

export default Name;

{/* <span className="input-group-btn">
                    <input
                        value="Search" 
                        type="submit" 
                        className="btn btn-default" */}