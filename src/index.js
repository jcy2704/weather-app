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