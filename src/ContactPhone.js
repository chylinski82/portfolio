import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';

const ContactPhone = () => {
 
  return (   
    <div id="contact">
        <a href="tel:+447552445193">
          <BsFillTelephoneFill size="18px"/><span className='contact-link'> (+44)7552445193</span></a>
    </div>
  )
}

export default ContactPhone