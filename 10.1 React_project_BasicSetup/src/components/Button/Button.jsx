import React from 'react';
import './Button.scss';

function Button({ title, ...props }) {
  return (
    <button type="button" {...props}>
      {title}
    </button>
  );
}

export default Button;
