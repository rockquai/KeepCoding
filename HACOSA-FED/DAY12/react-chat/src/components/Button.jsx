import React from 'react';

type PropTypes = {
  children: Node,
  color: string,
  onClick: Function
}

export default function Button(props: PropTypes) {
  console.log(props);
  const style = {
    color: props.color
  };

  return (
    <button
      style={style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
