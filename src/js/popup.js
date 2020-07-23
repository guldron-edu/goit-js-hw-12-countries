import '@pnotify/core/dist/BrightTheme.css';
import { popupWindowRef } from './refs';
import { defaults } from '@pnotify/core';
import { error, Stack } from '@pnotify/core';
defaults.sticker = false;
defaults.closer = false;

const myStack = new Stack({
  dir1: 'top',
  dir2: 'right',
  firstpos1: 10,
  firstpos2: 120,
  context: popupWindowRef,
});

function showPopup() {
  popupWindowRef.classList.remove('hide');
  error({
    text: 'Введите больше данных для поиска',
    stack: myStack,
  });
}

function hidePopup() {
  popupWindowRef.classList.add('hide');
}

export { showPopup, hidePopup };
