import androidCoopImg from '../images/android-coop.png';
import theListImg from '../images/the-list.png';
import theListPhone from '../images/the-list-phone.jpg';
import jsonVoorheesImg from '../images/json-voorhees.png';
import appointmentsImg from '../images/app0intments.png';
import appointmentsPhone from '../images/app0intments-phone.jpg';
import findYourHatImg from '../images/find-your-hat.png';
import portfolioImg from '../images/portfolio.png';
import portfolioPhone from '../images/portfolio-phone.jpg';

const theList = {
    key: 0,
    name: 'The List',
    description: `  is a dynamic list manager, where various users on multiple devices have 
    simultaneous access to lists, like a shopping list, for which this web app is ideal. 
    It is connected to external database, so while one user updates the list, 
    others see those changes in real time. Though "The List" was made mainly for smartphone users, 
    it's fully responsive and works great on all devices. This is a fully functional demo version featuring 
    two lists: shopping list and to do list, feel free to play around`,
    tech: 'ReactJS, Firestore, CSS',
    code: "https://github.com/chylinski82/list-public",
    codeLink: 'github.com/chylinski82/list-public',
    img: [theListImg, theListPhone],
    alt: 'view of the shopping list',
    web: "http://thelists.surge.sh",
    webLink: 'thelists.surge.sh'
}

const androidCoop = {
    key: 1,
    name: 'Android Coop',
    description: `  is my very own remake of the all times classic "the Chicken Coop", a little game
    console made in Soviet Union(!!). Perfect for smartphones, though has responsive design. 
    "Android Coop" has 12 difficulty/speed levels, and gets very tricky for level 10 on.`,
    tech: 'PhaserJS',
    code: "https://github.com/chylinski82/chickenCoup",
    codeLink: 'github.com/chylinski82/chickenCoup',
    img: [androidCoopImg, androidCoopImg],
    alt: 'screenshot of the game',
    web: "http://android-coop.surge.sh",
    webLink: 'android-coop.surge.sh'
}

const jsonVoorhees = {
    key: 2,
    name: 'JSON Voorhees',
    description: `  is my first fully independent react project, created to interact with, jsonplaceholder,
     an API that allows to practice handling HTTP requests. JSON Voorhees groups data from jsonplaceholder
      into todos, posts and photos. User can browse, edit and delete items, as well as search for data.`,
    tech: 'ReactJS, CSS',
    code: "https://github.com/chylinski82/json-voorhees",
    codeLink: 'github.com/chylinski82/json-voorhees',
    img: [jsonVoorheesImg, jsonVoorheesImg],
    alt: 'screenshot of the website showing todos page',
    web: "http://json-voorhees.surge.sh",
    webLink: 'json-voorhees.surge.sh',
}

const appointments = {
    key: 3,
    name: 'Appointments',
    description: `  is my first project integrated with Firestore database. User can add contacts to the 
    database and access them at any time from any device, then use existing contacts to add appointments. 
    "Appointments" has a fully responsive design and works great on all devices.`,
    tech: 'ReactJS, Firestore, CSS',
    code: 'https://github.com/chylinski82/appointments',
    codeLink: 'github.com/chylinski82/appointments',
    img: [appointmentsImg, appointmentsPhone],
    alt: 'screenshot of the app featuring appointments page',
    web: "http://app0intments.surge.sh",
    webLink: 'app0intments.surge.sh'
}

const findYourHat = {
    key: 4,
    name: 'Find Your Hat',
    description: `  is game, where you play on a field filled with holes and a single hat. 
    Your goal is to navigate the field and reach the hat before falling into a hole or 
    reaching the edge of the field.
    To move around the field, use the W, A, S, and D keys to move up, left, down, and right, 
    respectively. Be careful not to fall into a hole or go off the field, or you will lose the game. 
    If you manage to reach the hat, you win!
    The field is randomly generated each time you play, so no two games will be exactly the same. 
    Can you reach the hat and emerge victorious? To play, download/git clone the code, go to terminal
     and cd to the findYourHat directory, then type: node main.js `,
    tech: 'JavaScript, NodeJS',
    code: 'https://github.com/chylinski82/findYourHat',
    codeLink: 'github.com/chylinski82/findYourHat',
    img: [findYourHatImg, findYourHatImg],
    alt: 'screenshot of the app, featuring large maze'
}

const portfolio = {
    key: 5,
    name: 'Portfolio',
    description: `  page was created using ReactJS, a popular JavaScript library for building user interfaces.
     It is fully responsive and dynamic, meaning it will look great and function smoothly on any device.`,
    tech: 'ReactJS, CSS',
    code: 'https://github.com/chylinski82/portfolio',
    codeLink: 'github.com/chylinski82/portfolio',
    img: [portfolioImg, portfolioPhone],
    alt: 'screenshot of this website'
}

export const descriptionsArr = [theList, androidCoop, jsonVoorhees, appointments, findYourHat, portfolio];