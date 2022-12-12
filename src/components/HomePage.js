import React from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Skills from './Skills';

const HomePage = (props) => {
  const { width, breakpoint } = props;

  return (
    <div className='main'>
      <Hero />
      <h1>Krzysztof Chylinski</h1>
        <p>Welcome to my portfolio page! My name is Krzysztof Chylinski and I am a London based web developer.
           Currently ReactJS is my preferred framework. Check my main projects and get in touch!
        </p>
      <Skills width={width} breakpoint={breakpoint} />
      <Portfolio width={width} breakpoint={breakpoint}/>     
    </div>
  )
}

export default HomePage