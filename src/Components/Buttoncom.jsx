import React from 'react';

function Buttoncom(props) {
  return (
  <>
   <button type='button' className='staff_btn fw-bold text-capitalize  my-2 animated-button  mt-2 shadow-lg' ><span>{props.btn}</span></button>
  </>
  );
}

export default Buttoncom;
