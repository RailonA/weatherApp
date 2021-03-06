import setAttributes from './setAttributes';

const header = () => {
  const header = document.createElement('header');
  header.className = 'd-flex justify-content-between pt-5';

  const logoWrapper = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.className = 'text-light';
  h1.textContent = 'Weather App';

  logoWrapper.appendChild(h1);

  const searchWrapper = document.createElement('div');
  searchWrapper.className = 'd-flex align-items-center';
  const errorContainer = document.createElement('div');
  errorContainer.innerHTML = 'This entered place was not found';
  errorContainer.className = 'd-none alert-msg';
  setAttributes(errorContainer, {
    id: 'alert',
  });

  const searchInput = document.createElement('input');
  setAttributes(searchInput, {
    class: 'form-control form-control-sm me-2 shadow', id: 'search-input', type: 'search', placeholder: 'Search', 'aria-label': 'Search',
  });

  const tempWrapper = document.createElement('div');
  tempWrapper.className = 'form-check form-switch d-flex align-items-center';

  const tempSwitch = document.createElement('input');
  setAttributes(tempSwitch, {
    class: 'form-check-input shadow', id: 'tempSwitch', name: 'checkbox', type: 'checkbox', vaule: '',
  });
  const tempConnversion = document.createElement('h5');
  tempConnversion.className = 'd-flex temp mx-2 mt-2 text-light';
  tempConnversion.textContent = '°C / °F';

  tempWrapper.append(tempSwitch, tempConnversion);

  searchWrapper.append(searchInput, tempWrapper, errorContainer);

  header.append(logoWrapper, searchWrapper);
  return header;
};

export default header;
