import React, { useEffect } from 'react';
import Cardproduct from './cardproduct';
import Pagination1 from './pagination';
import { useLocation } from 'react-router-dom';


const Contentsidebar = () => {
  const location=useLocation()
  const [page, setPage] = React.useState(location.pathname.split("/")[2]);
   
  useEffect(() => {
    //Runs only on the first render
    console.log(location.pathname)
  }, [page]);
 
    return (
        <div id="content" >
    <h1>
      {page}
    </h1>
    <p>This is the main content area.</p>
  <Cardproduct/>
  <Pagination1 setPage={setPage}/>
   
  </div>
    );
}

export default Contentsidebar;
