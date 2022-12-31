import React from 'react';

import HeroCV from './HeroCV';

const CV = () => {
  
  return (
    <div className='main'>
      <HeroCV />
      <h1 className='cv-h1'>Krzysztof Chylinski</h1>
      <h2 className='cv-h2'>Contact Information:</h2>
      <ul className='cv-ul'>
        <li>Email:<a href="mailto:k.chylinski82@gmail.com"> k.chylinski82@gmail.com</a></li>
        <li>Phone: <a href="tel:+447552445193"> (+44)7552445193</a></li>
      </ul>
      <h2 className='cv-h2'>Summary:</h2>
      <p className='cv-p'>
        Self-taught web developer with a strong foundation in JavaScript, HTML, CSS, and ReactJS,
         as well as some experience in managing state with Redux and some proficiency in Python, NodeJS, and PhaserJS.
         Fluent in English, Polish, Spanish, and Portuguese, with a diverse background in construction,
         customer service, sales, and teaching. A problem-solver who excels in team work and continuously 
         seeks to enhance his skills through the use of chatGPT and other resources.
      </p>
      <h2 className='cv-h2'>Work Experience:</h2>
      <ul className='cv-ul'>
        <li>
          Self employed tower crane operator, London (2017-2022) - Worked in construction as part of a team,
           mainly responsible for operating tower cranes
        </li>
        <li>
          Account Manager for Construction Support, London (2016-2017) - Worked in an office environment,
           managing accounts and conducting sales over the phone and in person
        </li>
        <li>
          Salesman (2006-2016) - Worked in various sales roles, including in hospitality in Spain,
           as a PR/promoter in tourism in Portugal and in London
        </li>
        <li>
          Spanish language Tutor (previous to 2006) - Taught language lessons in Poland
        </li>
      </ul>
      <h2 className='cv-h2'>Education:</h2>
      <ul className='cv-ul'>
        <li>
          Universidade do Algarve - Portugal (~2007-2008), unfinished course in translation and interpretation
        </li>
        <li>
          Certificate of Maturity (equivalent to UK A-levels) - Poland
        </li>
      </ul>
      <h2 className='cv-h2'>Human Languages:</h2>
      <ul className='cv-ul'>
        <li>Fluent in English, Polish, Spanish, and Portuguese</li>
      </ul>
    </div>
  );
};

export default CV;
