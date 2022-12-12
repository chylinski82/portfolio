import React, { useState } from 'react';

import { TiArrowBackOutline, TiArrowForwardOutline } from 'react-icons/ti';

import { descriptionsArr } from '../utils/descriptions';

const ProjectDetails = (props) => {
  const [index, setIndex] = useState(0);

  const nextIndex = () => {
    return index === descriptionsArr.length - 1 ? 0 : index + 1; 
  }

  const prevIndex = () => {
    return index === 0 ? descriptionsArr.length - 1 : index - 1;
  }

  const { width, breakpoint } = props;

  const windowWidth = () => {
    return width < breakpoint ? 1 : 0;
  }

  const iconSize = () => {
    return width < breakpoint ? '30px' : '50px';
  }

  return (
    <div className='main'>
      
      <img src={ descriptionsArr[index].img[windowWidth()] }
           alt ={ descriptionsArr[index].alt }
           className="hero-project" />
      <div className='project-details-header'>
        <button onClick={() => setIndex(prevIndex())}>
          <TiArrowBackOutline size={iconSize()} className='prevNext'/>
        </button>
        <h1>{ descriptionsArr[index].name }</h1>
        <button onClick={() => setIndex(nextIndex())}>
          <TiArrowForwardOutline size={iconSize()} className='prevNext'/>
        </button>
      </div>
      {descriptionsArr[index].link}
      <p className='tech-p'>{ descriptionsArr[index].description }</p>
      <h3>technologies used: </h3>
      <p className='tech-p'>{ descriptionsArr[index].tech }</p>
      <h3>code: </h3>
      {descriptionsArr[index].code}
    </div>
  )
}

export default ProjectDetails