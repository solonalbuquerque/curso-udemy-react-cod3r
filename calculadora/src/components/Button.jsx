import * as React from 'react';

export function Button(props) {
  return (
    <button className={`
      button
      ${props.operation ? 'operation' : ''}
      ${props.double ? 'double' : ''}
      ${props.triple ? 'triple' : ''}
    `}
      onClick={e => props.click && props.click(props.label)}
    >
      {props.label}
    </button>
  );
};