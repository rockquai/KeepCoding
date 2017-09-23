import React from 'react';

type PropTypes = {
  children: Node,
  to: string
}

export default function Link(props: PropTypes) {
  return (
    <a href={props.to}>{props.children}</a>
  );
}
