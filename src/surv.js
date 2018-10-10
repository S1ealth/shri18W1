import './style.css';
import Hls from 'hls.js';

let cameras = [
  {
    container: 'camera-1',
    src: 'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fsosed%2Fmaster.m3u8',
    canvas: 'canv-1',
  },
  {
    container: 'camera-2',
    src: 'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fcat%2Fmaster.m3u8',
  },
  {
    container: 'camera-3',
    src: 'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fdog%2Fmaster.m3u8',
  },
  {
    container: 'camera-4',
    src: 'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fhall%2Fmaster.m3u8',
  },
];
function drawCanvas(canvId, src) {
  let canvas = document.getElementById(canvId);
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    // drawing code here
  } else {
    // canvas-unsupported code here
  }
}
function loop() {
  requestAnimationFrame(loop);
}
console.log('im watching you');
window.addEventListener('load', (e)=> {
  if (Hls.isSupported()) {
    console.log('hello, hls.js (inside node)!');
    cameras.forEach((camera) => {
      let {container, src} = camera;
      console.log(camera);
      getVideo(container, src);
      if (camera.hasOwnProperty('canvas')) {

      }
    });
  }
  drawCanvas('canv-1');
});
function getVideo(container, src) {
  let video = document.getElementById(container);
  if (Hls.isSupported()) {
    console.log('hls required');
    let hls = new Hls();
    hls.loadSource(src);
    // bind them together
    hls.attachMedia(video);
    // MEDIA_ATTACHED event is fired by hls object once MediaSource is ready
    hls.on(Hls.MEDIA_ATTACHED, function() {
      console.log('video and hls.js are now bound together !');
    });
    hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
      console.log('loaded. found ' + data.levels.length + ' quality level');
      video.play();
      console.log(hls.currentLevel);
    });
    hls.on(Hls.Events.ERROR, function(event, data) {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            // try to recover network error
            console.log('fatal network error encountered, try to recover');
            hls.startLoad();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            console.log('fatal media error encountered, try to recover');
            hls.recoverMediaError();
            break;
          default:
            // cannot recover
            hls.destroy();
            break;
        }
      }
    });
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    confirm.log('can play native');
    video.src = src;
    video.addEventListener('loadedmetadata', function() {
      video.play();
    });
  }
}
