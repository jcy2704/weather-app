import UnsplashBG from './javascript/unsplash';

const weatherKey = process.env.WEATHER_KEY;


const imgBG = new UnsplashBG();

fetch(`http://api.openweathermap.org/data/2.5/weather?q=Panama&appid=${weatherKey}`, { mode: 'cors' })
  .then((response) => response.json())
  .then((response) => {
    weather = response.weather[0].main;

    imgBG.fetchBg(weather);
  });
