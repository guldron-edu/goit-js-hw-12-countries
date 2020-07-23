import './css/style.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import renderMarkup from './js/renderMarkup';
import { inputRef, htmlLinkRef } from './js/refs';
import { hidePopup } from './js/popup';

inputRef.addEventListener(
  'input',
  debounce(ev => {
    if (inputRef.value !== '') {
      getResult(ev);
    } else {
      clearBlank();
    }
  }, 500),
);

function getResult(ev) {
  fetchCountries(ev.target.value)
    .then(array => renderMarkup(array))
    .catch(clearBlank());
}

function clearBlank() {
  htmlLinkRef.innerHTML = '';
  hidePopup();
}
