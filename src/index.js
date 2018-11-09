import './style.css';
import Stats from './images/stats.svg';
import Key from './images/key.svg';
import Robot from './images/robot-cleaner.svg';
import Router from './images/router.svg';
import Thermal from './images/thermal.svg';
import Ac from './images/air-conditioner.svg';
import Music from './images/music.svg';
import Fridge from './images/fridge.svg';
import Battery from './images/battery.svg';
import Kettle from './images/kettle.svg';
import Cleaner from './images/Richdata Graph Alternative.jpg';
window.addEventListener('load', () => {
  fetchEvents().then((events) => {
    if (events.hasOwnProperty('events')) {
      events.events.forEach((element) => {
        createCard(element);
      });
      addSensor();
    } else {
      throw new Error('events not found');
    }
  });
});
async function fetchEvents(type, limit) {
  let myHeaders = new Headers();
  let endpoint = 'http://localhost:8000/api/events';
  myHeaders.append('x-requested-with', 'XMLHttpRequest');
  let params = new URLSearchParams();
  if (type) {
    params.append('type', type);
  }
  if (limit) {
    params.append('limit', limit);
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
    if (e.data) {
      if (e.data.image === 'get_it_from_mocks_:3.jpg') {
        let image = cloneCard.querySelector('.camera-footage');
        image.src = Cleaner;
      }
    }
    cardGrid.appendChild(clone);
  } else {
    // Find another way to add the rows to the table because
  // the HTML template element is not supported.
  }
}
function addSensor() {
  const image = document.querySelector('.camera-footage');

  // Сюда будем записывать события
  const currentPointerEvents = {};

  // Состояние нашей картинки
  const imageState = {
    leftMin: -(image.offsetWidth - image.parentNode.offsetWidth),
    left: 0,
    leftMax: 0,
    zoomMin: 100,
    zoom: 100,
    zoomMax: 300,
    brightnessMin: .2,
    brightness: 1,
    brightnessMax: 4,
  };

  // Описание текущего жеста
  let gesture = null;

  // Запрещает таскать картинку мышкой
  image.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });

  image.addEventListener('pointerdown', (event) => {
    currentPointerEvents[event.pointerId] = event;
    if (!gesture) {
      gesture = {
        type: 'move',
      };
    }
  });

  const getDistance = (e1, e2) => {
    const {clientX: x1, clientY: y1} = e1;
    const {clientX: x2, clientY: y2} = e2;
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  };

  const getAngle = (e1, e2) => {
    const {clientX: x1, clientY: y1} = e1;
    const {clientX: x2, clientY: y2} = e2;
    const r = Math.atan2(x2 - x1, y2 - y1);
    return 360 - (180 + Math.round(r * 180 / Math.PI));
  };

  const feedbackNodes = {
    left: document.querySelector('.feedback__unit_left'),
    zoom: document.querySelector('.feedback__unit_zoom'),
    brightness: document.querySelector('.feedback__unit_brightness'),
  };

  const setFeedback = (name, value) => {
    feedbackNodes[name].innerText = Math.round(value * 100) / 100;
  };

  const setLeft = (dx) => {
    const {leftMin, leftMax} = imageState;

    imageState.left += dx;
    if (imageState.left < leftMin) {
      imageState.left = leftMin;
    } else if (imageState.left > leftMax) {
      imageState.left = leftMax;
    }
    image.style.left = `${imageState.left}px`;

    setFeedback('left', -imageState.left);
  };

  image.addEventListener('pointermove', (event) => {
    const pointersCount = Object.keys(currentPointerEvents).length;

    if (pointersCount === 0 || !gesture) {
      return;
    }

    if (pointersCount === 1 && gesture.type === 'move' && !currentPointerEvents.fake) {
      const previousEvent = currentPointerEvents[event.pointerId];
      const dx = event.clientX - previousEvent.clientX;
      setLeft(dx);
      currentPointerEvents[event.pointerId] = event;
    } else if (pointersCount === 2) {
      currentPointerEvents[event.pointerId] = event;
      const events = Object.values(currentPointerEvents);
      const distance = getDistance(events[0], events[1]);
      const angle = getAngle(events[0], events[1]);

      if (!gesture.startDistance) {
        gesture.startZoom = imageState.zoom;
        gesture.startDistance = distance;

        gesture.startBrightness = imageState.brightness;
        gesture.startAngle = angle;
        gesture.angleDiff = 0;
        gesture.type = null;
      }

      const diff = distance - gesture.startDistance;
      const angleDiff = angle - gesture.startAngle;

      if (!gesture.type) {
        if (Math.abs(diff) < 32 && Math.abs(angleDiff) < 8) {
          log({'!': 'ignore', diff, angleDiff});
          return;
        } else if (Math.abs(diff) > 32) {
          log({'!': 'detected zoom', diff, angleDiff});
          gesture.type = 'zoom';
        } else {
          log({'!': 'detected rotate', diff, angleDiff});
          gesture.type = 'rotate';
        }
      }

      if (gesture.type === 'zoom') {
        const {zoomMin, zoomMax} = imageState;
        let zoom = gesture.startZoom + diff;
        if (diff < 0) {
          zoom = Math.max(zoom, zoomMin);
        } else {
          zoom = Math.min(zoom, zoomMax);
        }

        imageState.zoom = zoom;
        image.style.height = `${zoom}%`;
        setFeedback('zoom', zoom);
      }

      if (gesture.type === 'rotate') {
        const {brightnessMin, brightnessMax} = imageState;

        if (Math.abs(angleDiff - gesture.angleDiff) > 300) {
          gesture.startBrightness = imageState.brightness;
          gesture.startAngle = angle;
          gesture.angleDiff = 0;
          return;
        }

        gesture.angleDiff = angleDiff;

        let brightness = gesture.startBrightness + angleDiff / 50;
        if (angleDiff < 0) {
          brightness = Math.max(brightness, brightnessMin);
        } else {
          brightness = Math.min(brightness, brightnessMax);
        }

        imageState.brightness = brightness;
        image.style.filter = `brightness(${brightness})`;
        setFeedback('brightness', brightness);
      }
    }
  });

  const onPointerUp = (event) => {
    gesture = null;
    delete currentPointerEvents[event.pointerId];
  };

  image.addEventListener('pointerup', onPointerUp);
  image.addEventListener('pointercancel', onPointerUp);
  image.addEventListener('pointerleave', onPointerUp);
}

