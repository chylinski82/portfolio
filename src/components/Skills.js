import React from 'react';
import { FaReact, FaCss3Alt, FaTerminal, FaPython, FaGoogle, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiFirebase, SiJavascript, SiRedux, SiHtml5, SiOpenai } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

const Skills = (props) => {
  const { width, breakpoint } = props;

  const iconSize = () => {
    return width < breakpoint ? '30px' : '40px';
  }

  return (
    <div>
      <h2 id="skills">Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <FaReact size={iconSize()}/>
          <p>ReactJS</p>
        </div>
        <div className="skill">
          <SiFirebase size={iconSize()}/>
          <p>Firestore</p>
        </div>
        <div className="skill">
          <FaCss3Alt size={iconSize()}/>
          <p>CSS</p>
        </div>
        <div className="skill">
          <SiJavascript size={iconSize()}/>
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <SiOpenai size={iconSize()}/>
          <p>ChatGPT</p>
        </div>
        <div className="skill">
          <SiRedux size={iconSize()}/>
          <p>Redux</p>
        </div>
        <div className="skill">
          <SiHtml5 size={iconSize()}/>
          <p>HTML</p>
        </div>
        <div className="skill">
          <FaTerminal size={iconSize()}/>
          <p>CLi</p>
        </div>
        <div className="skill">
          <FaPython size={iconSize()}/>
          <p>Python</p>
        </div>
        <div className="skill">
          <FaGoogle size={iconSize()}/>
          <p>Google</p>
        </div>
        <div className="skill">
          <FaGithub size={iconSize()}/>
          <p>Github</p>
        </div>
        <div className="skill">
          <DiJavascript1 size={iconSize()}/>
          <p>PhaserJS</p>
        </div>
        <div className="skill">
          <FaNodeJs size={iconSize()}/>
          <p>NodeJS</p>
        </div>
      </div>
    </div>
  )
}

export default Skills