const unsplashKey = process.env.BG_API;

export default class unsplashAPI {
  constructor() {
    this.fetchBg = this.fetchBg.bind(this);
  }

  async fetchBg(weather) {
    const bg = document.querySelector('.background');

    const response = await fetch(`https://api.unsplash.com/search/photos?page=1?c&query=${weather}&per_page=15&orientation=landscape&client_id=${unsplashKey}`, { mode: 'cors' });

    await response.json().then(items => {
      const imgURL = Math.floor(Math.random() * items.results.length) + 1;
      this.image = items.results[imgURL].urls.regular;

      bg.style.background = `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.80)), url(${this.image}) no-repeat center`;
      bg.style.backgroundSize = 'cover';
    });
  }
}
