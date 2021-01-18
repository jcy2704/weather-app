import './css/style.css';
import Weather from './javascript/weather';

const weather = new Weather();

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(weather.currentLocation);
}
