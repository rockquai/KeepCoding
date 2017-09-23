import React from 'react';
import './Header.css';

type PropTypes = {
  children: Node
}

export default function Header(props: PropTypes) {
  return (
    <div className="header">
      {props.children}
    </div>
  );
}
