export default function weatherInfo(items) {
  const { icon: iconIMG } = items.weather[0];
  const { name: countryName } = items;
  const { country } = items.sys;
  const { temp: tempC } = items.main;
  const container = document.querySelector('.weather-container');
  const icon = document.createElement('img');
  const infoCont = document.createElement('div');
  const temp = document.createElement('h1');
  const header = document.createElement('h3');
  const desc = document.createElement('p');
  const { description } = items.weather[0];

  container.innerHTML = '';

  icon.src = `http://openweathermap.org/img/wn/${iconIMG}@4x.png`;

  temp.textContent = `${Number((tempC).toFixed(1))}°C`;

  header.textContent = `${countryName}, ${country}`;

  desc.textContent = description;
  desc.style.textTransform = 'capitalize';

  infoCont.className = 'text-center info-container';

  infoCont.append(temp, header, desc);
  container.append(icon, infoCont);

  return container;
}