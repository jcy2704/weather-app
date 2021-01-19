import UnsplashBG from './unsplash';
import weatherInfo from './weatherInfo';

const weatherKey = process.env.WEATHER_API;

const imgBG = new UnsplashBG();

export default class Weather {
  constructor() {
    this.currentLocation = this.currentLocation.bind(this);
    this.currentWeather = this.currentWeather.bind(this);
    this.randomLocation = this.randomLocation.bind(this);
  }

  currentLocation(location) {
    this.latitude = location.coords.latitude;
    this.longitude = location.coords.longitude;

    this.currentWeather();
  }

  async currentWeather(id) {
    let response;
    if (this.latitude && this.longitude) {
      response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&units=metric&appid=${weatherKey}`, { mode: 'cors' });
    } else {
      response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${weatherKey}`);
    }

    response.json()
      .then(items => {
        const { weather: weatherAll } = items;
        const weather = weatherAll[0].main;

        imgBG.fetchBg(weather);
        weatherInfo(items);
      });
  }

  async randomLocation() {
    this.latitude = null;
    this.longitude = null;
    const response = await fetch('city.list.json');

    response.json()
      .then(items => {
        this.currentWeather(items[Math.floor(Math.random() * items.length) + 1].id);
      });
  }
}