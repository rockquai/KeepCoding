import React from 'react';
import './SearchBar.css';

type PropTypes = {
  onChange: Function
}

export default function SearchBar(props: PropTypes) {
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        onChange={props.onChange}
      />
    </div>
  );
}
