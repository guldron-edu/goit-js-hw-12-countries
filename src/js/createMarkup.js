import listMarkupTmpl from '../listMarkup.hbs';
import singleMarkupTmpl from '../singleMarkup.hbs';
import { htmlLinkRef } from '../js/refs';
import { hidePopup } from './popup';

function listCountryMarkup(array) {
  hidePopup();
  htmlLinkRef.innerHTML = listMarkupTmpl(array.map(el => el.name));
}

function singleCountryMarkup(array) {
  hidePopup();
  htmlLinkRef.innerHTML = singleMarkupTmpl(array[0]);
}

export { listCountryMarkup, singleCountryMarkup };
