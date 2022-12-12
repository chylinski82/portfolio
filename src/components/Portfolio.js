import React from 'react';
import { descriptionsArr } from '../utils/descriptions';

const Portfolio = (props) => {

  const { width, breakpoint } = props;

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
            <a className='image-link' href={descriptionsArr[i].link}>
              <img src={descriptionsArr[i].img[windowWidth()]} alt={descriptionsArr[i].alt}/>
            </a>
            <a href={descriptionsArr[i].link}>{descriptionsArr[i].name}</a>
            <span>{descriptionsArr[i].description}</span>
            <p className="read-more">read more...</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Portfolio