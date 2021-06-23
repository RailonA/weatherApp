import './styles/style.css';
import header from './scripts/header';
import main from './scripts/renderWeather';
import weatherApi from './scripts/weatherApi';
import displayWeather from './scripts/weatherRender';
import tempConv from './scripts/tempConv';

const content = document.querySelector('#content');
content.className = 'body';

const mainPage = document.createElement('div');
mainPage.className = 'container pb-5';

content.appendChild(mainPage);

const homePage = () => {
  mainPage.append(header(), main());
};

homePage();

const defaultCountry = 'New Jersey';
const getWeather = (query) => {
  const alertBox = document.getElementById('alert');

  fetch(`${weatherApi.base}weather?q=${query}&units=metric&APPID=${weatherApi.key}`)
    .then((weather) => weather.json())
    .then(displayWeather)
    .catch(() => {
      alertBox.classList.remove('d-none');
      setTimeout(() => {
        alertBox.classList.add('d-none');
      }, 1500);
    });
};

getWeather(defaultCountry);
const check = document.querySelector('#tempSwitch');

check.addEventListener('change', () => {
  const degree = document.querySelector('#degree');
  const degreeNbr = document.querySelector('#degree-nbr');
  if (check.checked) {
    degreeNbr.textContent = tempConv(parseInt(degreeNbr.textContent, 10), 'F');
    degree.textContent = '°F';
  } else {
    degreeNbr.textContent = tempConv(parseInt(degreeNbr.textContent, 10), 'C');
    degree.textContent = '°C';
  }
});

const search = document.querySelector('#search-input');

const found = (event) => {
  if (event.keyCode === 13) {
    getWeather(search.value);
  }
};

search.addEventListener('keypress', found);