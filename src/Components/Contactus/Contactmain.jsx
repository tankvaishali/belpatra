import React from 'react';
import HOC from '../HOC';
import Logorun from '../Logorun';
import "../../Assets/Css/Contactcss.css"
import Contactus from './Contactpage';

function Contactmain() {
  return (
    <>
     <Contactus/>        
      <Logorun/>
<div className='container py-5'>


<div className=' py-3'>
<iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29752.700882695055!2d72.8291723!3d21.228374199999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fdfc718eb4b%3A0xcf5efb27dfe048c5!2sBelpatra%20Pharmachem!5e0!3m2!1sen!2sin!4v1740025356298!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='shadow-lg'></iframe>
</div>
</div>
    </>
  );
}

export default HOC(Contactmain);
