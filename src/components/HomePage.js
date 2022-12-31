import React from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Skills from './Skills';

const HomePage = (props) => {
  const { width, breakpoint, setIndex } = props;

  return (
    <div className='main'>
      <Hero />
      <h1>Krzysztof Chylinski</h1>
        <p>Welcome to my portfolio page! My name is Krzysztof Chylinski, and I am a London based
           web developer. Currently, ReactJS is my preferred framework, and I'm excited about using ChatGPT. 
           Check out my main projects, and don't hesitate to get in touch!
        </p>
      <Skills width={width} breakpoint={breakpoint} />
      <Portfolio width={width} 
                 breakpoint={breakpoint}
                 setIndex={setIndex}/>     
    </div>
  )
}

export default HomePage