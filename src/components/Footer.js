import React from 'react'

const Footer = (props) => {
  const { width, breakpoint } = props;

  return (
    <div className='footer'>       
        {width > breakpoint ? <p>Krzysztof Chylinski 2022/23</p> : <p>Chylinski 2022/23</p>}  
    </div>
  )
}

export default Footer