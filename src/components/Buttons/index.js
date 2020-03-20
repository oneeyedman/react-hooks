import React from "react";
import Button from '../Button';
import PropTypes from 'prop-types';

const Buttons = props => {
  const generateButtons = () => {
    const {total, action} = props;
    const result = [];
    for (let i = 0; i < total; i++) {
      result.push(<Button key={i} content={i+1} action={action} />)
    }
    return result;
  };

  return (
    <div>{generateButtons()}</div>
  );
};

export default Buttons;

Buttons.propTypes = {
  total: PropTypes.number,
  action: PropTypes.func
}