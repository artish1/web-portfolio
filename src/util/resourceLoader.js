import heroBg from "../img/background.jpg";
import closeIcon from "../img/close_icon.png";

const preloadImgs = [heroBg, closeIcon];

class ResourceLoader {
  ready = false;
  images = [];

  constructor(imgs) {
    this.images = [...imgs];
  }

  subscribers = [];

  subscribe(callback) {
    if (this.ready) callback();

    this.subscribers.push(callback);
    return () => {
      const index = this.subscribers.indexOf(callback);
      if (index > -1) this.subscribers.splice(index, 1);
    };
  }

  async loadAll() {
    await Promise.all(this.images.map((imgSrc) => loadImage(imgSrc)));
    this.ready = true;
    this.subscribers.map((cb) => cb());
  }
}

export const resourceLoader = new ResourceLoader(preloadImgs);

resourceLoader.loadAll();

export function loadImage(src) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.addEventListener("load", resolve);
    image.addEventListener("error", reject);
    image.src = src;
  });
}
