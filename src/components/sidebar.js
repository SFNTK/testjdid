import React from 'react';
import Pricefilter from './pricefilter';
import Filterbydate from './filterbydate';
import Filterbystars from './filterbystars';

const Sidebar = () => {
  return (
    <div class="sidebar">
      <Pricefilter />
      <Filterbydate />
      <Filterbystars />

    </div>
  );
}

export default Sidebar;
