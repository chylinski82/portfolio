import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const Contact = () => {
 
  return (   
    <div id="contact">
        <a href="tel:+447552445193">
          <BsFillTelephoneFill size="25px"/><span className='contact-link'> (+44)7552445193</span></a>
        <a href="mailto:k.chylinski82@gmail.com">
          <MdAlternateEmail size="25px"/><span className='contact-link'> k.chylinski82@gmail.com</span></a>
        <a href="https://github.com/chylinski82" target="_blank" rel="noreferrer">
          <FaGithub size="25px"/><span className='contact-link'> github.com/chylinski82</span></a>
    </div>
  )
}

export default Contact;