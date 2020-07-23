import { listCountryMarkup, singleCountryMarkup } from './createMarkup';
import { showPopup, hidePopup } from './popup';

export default function renderMarkup(array) {
  if (array.length === 1) {
    hidePopup();
    singleCountryMarkup(array);
  }
  if (array.length > 1 && array.length <= 10) {
    hidePopup();
    listCountryMarkup(array);
  }
  if (array.length > 10) {
    showPopup();
  }
}
