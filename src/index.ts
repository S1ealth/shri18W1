import Ac from './images/air-conditioner.svg';
import Battery from './images/battery.svg';
import Fridge from './images/fridge.svg';
import Kettle from './images/kettle.svg';
import Key from './images/key.svg';
import Music from './images/music.svg';
import Robot from './images/robot-cleaner.svg';
import Router from './images/router.svg';
import Stats from './images/stats.svg';
import Thermal from './images/thermal.svg';
import './style.css';

window.addEventListener('load', () => {
  fetchEvents().then((events) => {
    if (events.hasOwnProperty('events')) {
      events.events.forEach((element: object) => {
        createCard(element);
      });
    } else {
      throw new Error('events not found');
    }
  });
});
async function fetchEvents(type?: string, limit?: number) {
  const myHeaders = new Headers();
  const endpoint: string = 'http://localhost:8000/api/events';
  myHeaders.append('x-requested-with', 'XMLHttpRequest');
  const params = new URLSearchParams();
  if (type) {
    params.append('type', type);
  }
  if (limit) {
    params.append('limit', limit.toString());
  }
  try {
    const result = await fetch(endpoint,
        {
          body: params,
          headers: myHeaders,
          method: 'POST',
        });
    if (result.status !== 200) {
      throw new Error(`failed with code ${result.status}`);
    } else {
      const data = await result.json();
      return data;
    }
  } catch (e) {
    throw e;
  }
}
function createCard(e: object) {
  // Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
  if ('content' in document.createElement('template')) {
    const card = ( document.getElementById('card-tempo') as HTMLInputElement);
    const clone = document.constNode(card.content, true);

    const cloneCard = clone.querySelector('.card');
    //  title
    const title = clone.querySelector('.title').
    title.innerHTML = e.title;
    // icon
    const icon = clone.querySelector('.icon');
    switch (e.icon) {
      case 'stats':
        icon.src = Stats;
        break;
      case 'key':
        icon.src = Key;
        break;
      case 'robot-cleaner':
        icon.src = Robot;
        break;
      case 'router':
        icon.src = Router;
        break;
      case 'thermal':
        icon.src = Thermal;
        break;
      case 'ac':
        icon.src = Ac;
        break;
      case 'music':
        icon.src = Music;
        break;
      case 'fridge':
        icon.src = Fridge;
        break;
      case 'battery':
        icon.src = Battery;
        break;
      case 'kettle':
        icon.src = Kettle;
        break;
      default:
        icon.src = '';
    }
    //  description
    const desc = clone.querySelector('.description');
    if (e.description === null) {
      desc.remove();
    } else {
      desc.innerHTML = e.description;
    }
    //  source
    const source = clone.querySelector('.source');
    source.innerHTML = e.source;
    //  time
    const time = clone.querySelector('.time');
    time.innerHTML = e.time;
    const cardGrid = document.getElementById('card-grid');
    if (e.size === 's') {
      cloneCard.classList.add('card_s');
    }
    if (e.type === 'info') {
      // cloneCard.classList.add('info');
    } else
    if (e.type === 'critical') {
      // cloneCard.classList.add('critical');
      cloneCard.querySelector('.header').classList.add('critical');
    }
    cardGrid.appendChild(clone);
  } else {
    // Find another way to add the rows to the table because
  // the HTML template element is not supported.
  }
}
