import React from 'react';
import { bool, func } from 'prop-types';

const Burger = ({ open, setOpen }) => {
  return (
    <button open={open} onClick={() => setOpen(!open)} id="burger" className={open? 'is-open hidden open-main-nav md:block': 'hidden open-main-nav md:block'}>
      <span className="burger"></span>
    </button>
  )
}

Burger.prototype = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;