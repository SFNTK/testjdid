import React from 'react';
import Pricefilter from './pricefilter';
import Filterbydate from './filterbydate';
import Filterbystars from './filterbystars';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate=useNavigate()
  return (
    <div class="sidebar">
      <Pricefilter navigate={navigate} />
      <Filterbydate navigate={navigate} />
      <Filterbystars navigate={navigate} />

    </div>
  );
}

export default Sidebar;
