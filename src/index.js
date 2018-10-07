import './style.css';
import Events from './events.json';
import Stats from './stats.svg';

console.log('hello there');
console.log(Events.events);

window.addEventListener('load', () => {
  Events.events.forEach((element) => {
    createCard(element);
  });
});
function createCard(e) {
  // Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
  if ('content' in document.createElement('template')) {
    let card = document.getElementById('card-tempo');
    let clone = document.importNode(card.content, true);

    let cloneCard = clone.querySelector('.card');
    //  title
    let title = clone.querySelector('.title');
    title.innerHTML = e.title;
    // icon
    let icon = clone.querySelector('.icon');
    switch (e.icon) {
      case 'stats':
        icon.src = Stats;
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
    console.log(e);
    if (e.size === 's') {
      cloneCard.classList.add('card_s');
    }
    cardGrid.appendChild(clone);
  } else {
    // Find another way to add the rows to the table because
  // the HTML template element is not supported.
  }
}
