require('./style.css');
const Stats =  require('./images/stats.svg');
const Key = require( './images/key.svg');
const Robot = require( './images/robot-cleaner.svg');
const Router = require( './images/router.svg');
const Thermal = require( './images/thermal.svg');
const Ac = require( './images/air-conditioner.svg');
const Music = require( './images/music.svg');
const Fridge = require( './images/fridge.svg');
const Battery = require( './images/battery.svg');
const Kettle = require( './images/kettle.svg');

window.addEventListener('load', () => {
  fetchEvents().then((events:object) => {
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
  let myHeaders = new Headers();
  let endpoint:string = 'http://localhost:8000/api/events';
  myHeaders.append('x-requested-with', 'XMLHttpRequest');
  let params = new URLSearchParams();
  if (type) {
    params.append('type', type);
  }
  if (limit) {
    params.append('limit', limit.toString());
  }
  try {
    let result = await fetch(endpoint,
        {
          method: 'POST',
          body: params,
          headers: myHeaders,
        });
    if (result.status !== 200) {
      throw new Error(`failed with code ${result.status}`);
    } else {
      let data = await result.json();
      return data;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
}
function createCard(e:object) {
  console.log(e);
  // Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
  if ('content' in document.createElement('template')) {
    let card = (<HTMLInputElement>document.getElementById('card-tempo'));
    let clone = (<HTMLInputElement>document.constNode(card.content, true));

    let cloneCard = clone.querySelector('.card');
    //  title
    let title = clone.querySelector('.title').
    title.innerHTML = e.title;
    // icon
    let icon = clone.querySelector('.icon');
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
    let desc = clone.querySelector('.description');
    if (e.description === null) {
      desc.remove();
    } else {
      desc.innerHTML = e.description;
    }
    //  source
    let source = clone.querySelector('.source');
    source.innerHTML = e.source;
    //  time
    let time = clone.querySelector('.time');
    time.innerHTML = e.time;
    let cardGrid = document.getElementById('card-grid');
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
