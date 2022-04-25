import React from 'react';
import './Search.css';

function Search(){
    return(
        <Search>
            <div className="search">
                <input type="text" className="searchTerm" placeholder="What are you looking for?"></input>
                    <button type="submit" className="searchButton">
                        <i className="fa fa-search"></i>
                    </button>
            </div>
        </Search>

    )
}
export default Search ;