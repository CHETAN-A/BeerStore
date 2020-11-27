import React from 'react';

const SearchBar = (props) => {
    return <div className="search-bar">
        {props.searchTxt.length === 0 ? null :
            <i className="icon" onClick={() => props.setSearchTxt("")}>
                &times;
            </i>
        }
        <input
            name="search"
            type="text"
            value={props.searchTxt}
            onChange={(e) => {
                props.setSearchTxt(e.target.value)
            }}
            placeholder="Search for your fav. brand"
            className="search-text"
        />
    </div>
}

export default SearchBar;