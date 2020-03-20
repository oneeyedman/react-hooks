import React from "react";
import PropTypes from 'prop-types';

const Button = props => {
  const {content, action} = props;
  return (
    <button type="button" onClick={action} value={content}>{content}</button>
  );
}

export default Button;

Button.propTypes = {
  content: PropTypes.number,
  action: PropTypes.func
};