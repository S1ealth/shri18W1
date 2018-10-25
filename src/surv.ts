import Hls from 'hls.js';
import './style.css';

const cameras = [
  {
    canvas: 'canv-1',
    container: 'camera-1',
    src: 'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fsosed%2Fmaster.m3u8',
  },
  {
    canvas: 'canv-2',
    container: 'camera-2',
    src: 'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fcat%2Fmaster.m3u8',
  },
  {
    canvas: 'canv-3',
    container: 'camera-3',
    src: 'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fdog%2Fmaster.m3u8',
  },
  {
    canvas: 'canv-4',
    container: 'camera-4',
    src: 'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fhall%2Fmaster.m3u8',
  },
];
window.addEventListener('load', (e) => {
  if (Hls.isSupported()) {
    cameras.forEach((camera) => {
      const {container, src, canvas} = camera;
      getVideo(container, src);
      createCanvas(canvas, container);
    });
  }
});
function createCanvas(cId: string, vId: string) {
  const canvas = document.getElementById(cId);
  canvas.classList.add(vId);
  const ctx = canvas.getContext('2d');
  const video = document.getElementById(vId);

  function loop() {
    ctx.drawImage(video, 0, 0);
    requestAnimationFrame(loop);
  }
  loop();
}
function getVideo(container: string, src: string) {
  const video = document.querySelector(container);
  video.classList.add('hidden');
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(src);
    // bind them together
    hls.attachMedia(video);
    // MEDIA_ATTACHED event is fired by hls object once MediaSource is ready
    hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
      video.play();
    });
    hls.on(Hls.Events.ERROR, (event, data) => {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            // try to recover network error
            hls.startLoad();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
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
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
  }
}
