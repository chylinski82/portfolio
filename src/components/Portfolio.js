import React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from './App';
import { descriptionsArr } from '../utils/descriptions';

const Portfolio = (props) => {

  const { width, breakpoint, setIndex } = props;

  const leftRight = (index) => {
    return index % 2 === 0 ? 'project-left' : 'project-right'
  }

  const windowWidth = () => {
    return width < breakpoint ? 1 : 0;
  }

  return (
    <div>
      <h2 id="projects">Projects</h2>
      <div className="container-grid">
        {descriptionsArr.map((obj) => {
          const i = descriptionsArr.indexOf(obj);
          return <div className={leftRight(i)} key={descriptionsArr[i].key}>
            <a className='image-link' href={descriptionsArr[i].web} 
                                      target="_blank" 
                                      rel="noreferrer">
              <img src={descriptionsArr[i].img[windowWidth()]} alt={descriptionsArr[i].alt}/>
            </a>
            <a href={descriptionsArr[i].web} 
               target="_blank" 
               rel="noreferrer">{descriptionsArr[i].name}</a>
            <span>{descriptionsArr[i].description}</span>
            <NavLink to={ROUTES.PROJECTS} 
                     className="read-more"
                     onClick={() => setIndex(i)}>read more...</NavLink>
          </div>
        })}
      </div>
    </div>
  )
}

export default Portfolio