import androidCoopImg from '../images/android-coop.png';
import theListImg from '../images/the-list.png';
import theListPhone from '../images/the-list-phone.jpg';

const theList = {
    key: 0,
    name: 'The List',
    description: `  is a dynamic list manager, where various users on multiple devices have 
    simultaneous access to lists, like a shopping list, for which this web app is ideal. 
    It is connected to external database, so while one user updates the list, 
    others see those changes in real time. Though "The List" was made mainly for smartphone users, 
    it's fully responsive and works great on all devices.`,
    tech: 'ReactJS, Firestore, CSS',
    code: <a href="https://github.com/chylinski82/list">github.com/chylinski82/list</a>,
    img: [theListImg, theListPhone],
    alt: 'view of the shopping list',
    link: <a href="http://theshoppinglist.surge.sh">theshoppinglist.surge.sh</a>
}

const androidCoop = {
    key: 1,
    name: 'Android Coop',
    description: `  is my very own remake of the all times classic "the Chicken Coop", a little game
    console made in Soviet Union(!!). Perfect for smartphones, though has responsive design. 
    "Android Coop" has 12 difficulty/speed levels, and gets very tricky for level 10 on.`,
    tech: 'PhaserJS',
    code: <a href="https://github.com/chylinski82/chickenCoup">github.com/chylinski82/chickenCoup</a>,
    img: [androidCoopImg, androidCoopImg],
    alt: 'screenshot of the game',
    link: <a href ="http://android-coop.surge.sh">android-coop.surge.sh</a>
}

export const descriptionsArr = [theList, androidCoop];