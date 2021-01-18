const unsplashKey = process.env.BG_KEY;

export default class unsplashAPI {
  constructor() {
    this.fetchBg = this.fetchBg.bind(this);
  }

  async fetchBg(weather) {
    const bg = document.querySelector('.background');

    const response = await fetch(`https://api.unsplash.com/search/photos?page=1?c&query=${weather}&orientation=landscape&client_id=${unsplashKey}`, { mode: 'cors' });

    response.json().then(items => {
      const imgURL = Math.floor(Math.random() * items.results.length) + 1;
      this.image = items.results[imgURL].urls.full;

      bg.style.background = `url(${this.image}) no-repeat center`;
      bg.style.backgroundSize = 'cover';
    });
  }
}
