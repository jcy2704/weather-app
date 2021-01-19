/* eslint-disable consistent-return */
import UnsplashBG from './unsplash';
import weatherInfo from './weatherInfo';
import loaderAnimation from './loaderAnimation';

const weatherKey = process.env.WEATHER_API;

const imgBG = new UnsplashBG();

const citiesListCont = () => {
  const ul = document.createElement('ul');
  const div = document.createElement('div');

  ul.className = 'cities-list list-group';
  div.className = 'cities-list-cont m-5';

  ul.innerHTML = '';

  div.appendChild(ul);

  return div;
};

export default class Weather {
  constructor() {
    this.currentLocation = this.currentLocation.bind(this);
    this.currentWeather = this.currentWeather.bind(this);
    this.randomLocation = this.randomLocation.bind(this);
    this.loader = this.loader.bind(this);
    this.searchLoader = this.searchLoader.bind(this);
    this.setTemp = this.setTemp.bind(this);
    this.container = document.querySelector('.weather-container');
    this.searchCity = this.searchCity.bind(this);
    this.setTempRN = this.setTempRN.bind(this);
  }

  searchLoader(state) {
    this.listContainer = document.querySelector('.cities-list-cont');
    this.listContainer.appendChild(loaderAnimation());

    this.loadAnim = this.listContainer.querySelectorAll('.spinner-grow');

    this.loadAnim.forEach(loader => {
      loader.classList.add(`${state ? 'd-block' : 'd-none'}`);
    });
  }

  loader(state) {
    this.container.appendChild(loaderAnimation());

    this.loadAnim = document.querySelector('.spinner-grow');

    this.loadAnim.classList.add(`${state ? 'd-block' : 'd-none'}`);
  }

  setTempRN(currentTemp) {
    this.temp = document.querySelector('.temp-checkbox');
    const temp = document.getElementById('weatherTemp');
    const fahrenheit = (currentTemp * (9 / 5)) + 32;

    temp.textContent = this.temp.checked ? `${Number((fahrenheit).toFixed(1))}°F` : `${Number((currentTemp).toFixed(1))}°C`;
  }

  setTemp(currentTemp) {
    this.temp = document.querySelector('.temp-checkbox');
    const temp = document.getElementById('weatherTemp');
    const fahrenheit = (currentTemp * (9 / 5)) + 32;

    temp.classList.remove('fade-anim');

    setTimeout(() => {
      requestAnimationFrame(() => {
        temp.innerHTML = this.temp.checked ? `${Number((fahrenheit).toFixed(1))}°F` : `${Number((currentTemp).toFixed(1))}°C`;
        temp.classList.add('fade-anim');
      });
    }, 250);
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
      response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${weatherKey}`);
    }

    this.allCities = await fetch('city.list.json');
    this.allCities = this.allCities.json();

    await response.json()
      .then(items => {
        const tempSwitch = document.querySelector('.temp-checkbox');
        const { temp } = items.main;
        const { weather: weatherAll } = items;
        const weather = weatherAll[0].main;

        imgBG.fetchBg(weather);
        weatherInfo(items);

        this.setTempRN(temp);

        tempSwitch.addEventListener('click', () => {
          this.setTemp(temp);
        });

        this.loader(false);
      });
  }

  async randomLocation() {
    this.latitude = null;
    this.longitude = null;
    this.allCities = await fetch('city.list.json');
    this.allCities = this.allCities.json();

    await this.allCities
      .then(items => {
        this.currentWeather(items[Math.floor(Math.random() * items.length) + 1].id);
      });
  }

  filterCities(searchResult) {
    const filtered = new Promise((resolve, reject) => {
      try {
        this.allCities
          .then(items => {
            const result = items.map(({ id, name }) => {
              if (name.toLowerCase().startsWith(searchResult.toLowerCase())) {
                return { id, name };
              }
              return 'fail';
            }).filter(city => city !== 'fail');
            return resolve(result);
          });
      } catch (e) {
        return reject(e);
      }
    });
    return filtered;
  }

  async searchCity() {
    const main = document.querySelector('.main');
    if (main.childElementCount >= 3) {
      const divs = document.querySelectorAll('.cities-list-cont');

      divs.forEach(div => {
        main.removeChild(div);
      });
    }

    main.appendChild(citiesListCont());

    const searchInput = document.getElementById('searchCity');
    const searchResult = searchInput.value;

    this.searchLoader(true);

    const citiesList = document.querySelector('.cities-list');

    this.filteredCities = await this.filterCities(searchResult);

    citiesList.innerHTML = '';

    await this.filteredCities.forEach(({ id, name }) => {
      const li = document.createElement('li');

      li.setAttribute('id', id);
      li.className = 'list-group-item';
      li.textContent = name;
      li.style.color = 'black';
      li.style.cursor = 'pointer';

      citiesList.appendChild(li);
    });

    const citiesResult = document.querySelectorAll('.list-group-item');
    citiesResult.forEach(city => {
      city.addEventListener('click', () => {
        const div = document.querySelector('.cities-list-cont');
        this.latitude = null;
        this.longitude = null;
        this.currentWeather(city.id);
        main.removeChild(div);
      });
    });

    this.searchLoader(false);
  }
}
