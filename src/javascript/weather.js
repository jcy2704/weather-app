import UnsplashBG from './unsplash';
import weatherInfo from './weatherInfo';
import loaderAnimation from './loaderAnimation';

const weatherKey = process.env.WEATHER_API;

const imgBG = new UnsplashBG();

function citiesListCont() {
  const ul = document.createElement('ul');
  const div = document.createElement('div');

  ul.className = 'cities-list';
  div.className = 'cities-list-cont';

  ul.innerHTML = '';

  div.appendChild(ul);
  return div;
}

export default class Weather {
  constructor() {
    this.currentLocation = this.currentLocation.bind(this);
    this.currentWeather = this.currentWeather.bind(this);
    this.randomLocation = this.randomLocation.bind(this);
    this.loader = this.loader.bind(this);
    this.setTemp = this.setTemp.bind(this);
    this.container = document.querySelector('.weather-container');
    this.searchCity = this.searchCity.bind(this);
  }

  loader(state) {
    this.container.appendChild(loaderAnimation());

    this.loadAnim = document.querySelector('.spinner-grow');

    this.loadAnim.classList.add(`${state ? 'd-block' : 'd-none'}`);
  }

  setTemp(currentTemp) {
    this.temp = document.querySelector('.temp-checkbox');
    const temp = document.getElementById('weatherTemp');

    if (this.temp.checked) {
      currentTemp = (currentTemp * (9 / 5)) + 32;
      temp.textContent = `${Number((currentTemp).toFixed(1))}°F`;
    } else {
      temp.textContent = `${Number((currentTemp).toFixed(1))}°C`;
    }
  }

  currentLocation(location) {
    this.latitude = location.coords.latitude;
    this.longitude = location.coords.longitude;

    this.currentWeather();
  }

  async currentWeather(id) {
    this.container.innerHTML = '';
    this.loader(true);

    let response;
    if (this.latitude && this.longitude) {
      response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&units=metric&appid=${weatherKey}`, { mode: 'cors' });
    } else {
      response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${weatherKey}`);
    }

    await response.json()
      .then(items => {
        const tempSwitch = document.querySelector('.temp-checkbox');
        const searchBtn = document.querySelector('.search-btn');
        const main = document.querySelector('.main');
        const { temp } = items.main;
        const { weather: weatherAll } = items;
        const weather = weatherAll[0].main;

        imgBG.fetchBg(weather);
        weatherInfo(items);

        this.setTemp(temp);

        tempSwitch.addEventListener('click', () => {
          this.setTemp(temp);
        });

        searchBtn.addEventListener('click', () => {
          main.appendChild(citiesListCont());
          this.searchCity();
        });

        this.loader(false);
      });
  }

  async randomLocation() {
    this.latitude = null;
    this.longitude = null;
    const response = await fetch('city.list.json');

    await response.json()
      .then(items => {
        this.currentWeather(items[Math.floor(Math.random() * items.length) + 1].id);
      });
  }

  async searchCity() {
    const main = document.querySelector('.main');
    const searchInput = document.getElementById('searchCity');
    const searchResult = searchInput.value;

    if (searchResult) {

      const cities = await fetch('city.list.json');
    }
    this.cities = searchInput;
  }
}
