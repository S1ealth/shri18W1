import './style.css';
import Hls from 'hls.js';
console.log('im watching you');
window.addEventListener('load', (e)=> {
  if (Hls.isSupported()) {
    console.log('hello, hls.js (inside node)!');
  }
})
;
