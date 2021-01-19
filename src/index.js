import './css/style.css';
import Weather from './javascript/weather';

const weather = new Weather();

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(weather.currentLocation);
}

function permissionHanldler() {
  navigator.permissions.query({ name: 'geolocation' })
    .then(result => {
      if (result.state === 'granted') {
        navigator.geolocation.getCurrentPosition(weather.currentLocation);
      } else {
        weather.randomLocation();
      }
    });
}

permissionHanldler();

const searchBtn = document.querySelector('.search-btn');
const searchInput = document.getElementById('searchCity');
let counter = 0;

searchBtn.addEventListener('click', () => {
  if (searchInput.value !== '') {
    weather.searchCity();
    searchInput.value = '';
  } else {
    counter += 1;
    searchInput.classList.add('input-warning');

    if (counter >= 3) {
      searchInput.placeholder = 'PLEASE ENTER A CITY!!';
    } else {
      searchInput.placeholder = 'Please Enter a City';
    }
  }
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    searchBtn.click();
  }
});