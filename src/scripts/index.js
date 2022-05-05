import '../assets/styles/style.scss';

const ENG = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];

const ENG_CAPS_LOCK_ON = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];

const ENG_SHIFT_ON = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];

const ENG_CAPS_LOCK_ON_SHIFT_ON = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];

const RUS = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];

const RUS_CAPS_LOCK_ON = [
  'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
  'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];

const RUS_SHIFT_ON = [
  'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
  'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];

const RUS_CAPS_LOCK_ON_SHIFT_ON = [
  'ё', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
  'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl'];

const KEY_CODES = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const CLASSES = [
  '', '', '', '', '', '', '', '', '', '', '', '', '', 'long last',
  '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'last',
  'long', '', '', '', '', '', '', '', '', '', '', '', 'long last',
  'long', '', '', '', '', '', '', '', '', '', '', '', 'long last',
  'long', '', '', 'verylong', '', '', '', '', 'last'];

const keyboardState = {
  shift: false,
  capsLock: false,
  language: localStorage.getItem('cur_language') ? localStorage.getItem('cur_language') : 'ENG',
  selectMouse: null,
  cursorPosition: null,
};

function generateKeyboard() {
  const BODY = document.querySelector('body');
  const INPUT = document.createElement('textarea');
  BODY.appendChild(INPUT);
  const KEYBOARD = document.createElement('div');
  KEYBOARD.classList.add('keyboard');
  BODY.appendChild(KEYBOARD);
  const DESCRIPTION = document.createElement('p');
  DESCRIPTION.innerText = 'Toggle language: Left Ctrl + Left Alt. For Windows';
  BODY.appendChild(DESCRIPTION);
  const DESCRIPTION2 = document.createElement('p');
  DESCRIPTION2.innerText = 'Для сохранения активным Shift кликните на клавишу и отпустите клик не над этой клавишей';
  BODY.appendChild(DESCRIPTION2);

  for (let i = 0; i < KEY_CODES.length; i += 1) {
    const BUTTON = (`
    <div class="key ${CLASSES[i]}" data-code="${KEY_CODES[i]}">
      <span class="eng ${keyboardState.language === 'ENG' ? '' : 'hidden'}">
        <span class="letter base">${ENG[i]}</span>
        <span class="letter caps-on hidden">${ENG_CAPS_LOCK_ON[i]}</span>
        <span class="letter shift-on hidden">${ENG_SHIFT_ON[i]}</span>
        <span class="letter caps-on-shift-on hidden">${ENG_CAPS_LOCK_ON_SHIFT_ON[i]}</span>
      </span>
      <span class="rus ${keyboardState.language === 'ENG' ? 'hidden' : ''}">
        <span class="letter base">${RUS[i]}</span>
        <span class="letter caps-on hidden">${RUS_CAPS_LOCK_ON[i]}</span>
        <span class="letter shift-on hidden">${RUS_SHIFT_ON[i]}</span>
        <span class="letter caps-on-shift-on hidden">${RUS_CAPS_LOCK_ON_SHIFT_ON[i]}</span>
      </span>
    </div>`);
    KEYBOARD.insertAdjacentHTML('beforeend', BUTTON);
  }
}

function addAnimationClass(element) {
  element.classList.add('animation');
}

function removeAnimationClass(element) {
  element.classList.remove('animation');
  element.classList.add('animation-end');
  element.addEventListener('animationend', () => {
    element.classList.remove('animation-end');
  });
}

function changeLanguage() {
  const LANGUAGE = keyboardState.language;
  const KEYS = document.querySelectorAll('.key');
  if (LANGUAGE === 'ENG') {
    KEYS.forEach((key) => {
      key.querySelector('.eng').classList.add('hidden');
      key.querySelector('.rus').classList.remove('hidden');
    });
    keyboardState.language = 'RUS';
    localStorage.setItem('cur_language', keyboardState.language);
  } else {
    KEYS.forEach((key) => {
      key.querySelector('.rus').classList.add('hidden');
      key.querySelector('.eng').classList.remove('hidden');
    });
    keyboardState.language = 'ENG';
    localStorage.setItem('cur_language', keyboardState.language);
  }
}

function changeClass(whoVisible) {
  const ALL_LETTER = document.querySelectorAll('.letter');
  const FILTER_WITHOUT_HIDDEN = Array.from(ALL_LETTER).filter((letter) => !letter.classList.contains('hidden'));
  FILTER_WITHOUT_HIDDEN.forEach((letter) => {
    letter.classList.add('hidden');
  });
  const SHOULD_BE_VISIBLE_COLLECTION = document.querySelectorAll(whoVisible);
  SHOULD_BE_VISIBLE_COLLECTION.forEach((letter) => {
    letter.classList.remove('hidden');
  });
}

function printKeyboard(dataCode) {
  const INPUT = document.querySelector('textarea');
  console.log(keyboardState.cursorPosition);
  if (KEY_CODES.includes(dataCode)) {
    switch (dataCode) {
      case 'Backspace':
        if (keyboardState.cursorPosition > 0) {
          INPUT.value = (INPUT.value).split('').filter((char, index) => index !== keyboardState.cursorPosition - 1).join('');
          keyboardState.cursorPosition -= 1;
          INPUT.selectionStart = keyboardState.cursorPosition;
          INPUT.selectionEnd = keyboardState.cursorPosition;
        }
        break;
      case 'Delete': {
        INPUT.value = (INPUT.value).split('').filter((char, index) => index !== keyboardState.cursorPosition).join('');
        INPUT.selectionStart = keyboardState.cursorPosition;
        INPUT.selectionEnd = keyboardState.cursorPosition;
        break;
      }
      case 'Tab':
        INPUT.value = `${INPUT.value.slice(0, keyboardState.cursorPosition)}    ${INPUT.value.slice(keyboardState.cursorPosition)}`;
        keyboardState.cursorPosition += 4;
        INPUT.selectionStart = keyboardState.cursorPosition;
        INPUT.selectionEnd = keyboardState.cursorPosition;
        break;
      case 'Enter':
        INPUT.value = `${INPUT.value.slice(0, keyboardState.cursorPosition)}\n${INPUT.value.slice(keyboardState.cursorPosition)}`;
        keyboardState.cursorPosition += 1;
        INPUT.selectionStart = keyboardState.cursorPosition;
        INPUT.selectionEnd = keyboardState.cursorPosition;
        break;
      case 'Space':
        INPUT.value = `${INPUT.value.slice(0, keyboardState.cursorPosition)} ${INPUT.value.slice(keyboardState.cursorPosition)}`;
        keyboardState.cursorPosition += 1;
        INPUT.selectionStart = keyboardState.cursorPosition;
        INPUT.selectionEnd = keyboardState.cursorPosition;
        break;
      case 'ShiftLeft':
        break;
      case 'ShiftRight':
        break;
      case 'ControlRight':
        break;
      case 'ControlLeft':
        break;
      case 'MetaLeft':
        break;
      case 'AltLeft':
        break;
      case 'AltRight':
        break;
      case 'CapsLock':
        break;
      default:
        INPUT.value = `${INPUT.value.slice(0, keyboardState.cursorPosition)}${document.querySelector(`[data-code="${dataCode}"]`).innerText}${INPUT.value.slice(keyboardState.cursorPosition)}`;
        keyboardState.cursorPosition += 1;
        INPUT.selectionStart = keyboardState.cursorPosition;
        INPUT.selectionEnd = keyboardState.cursorPosition;
    }
  }
}

function onKeyDown(event) {
  event.preventDefault();
  const { repeat } = event;
  if (event.code === 'AltLeft' && (event.ctrlKey === true || event.metaKey === true)) {
    changeLanguage();
  }
  if (event.code === 'CapsLock') {
    if (!repeat) {
      if (keyboardState.capsLock === false) {
        changeClass('.caps-on');
        addAnimationClass(document.querySelector('[data-code="CapsLock"]'));
        keyboardState.capsLock = true;
      } else {
        changeClass('.base');
        removeAnimationClass(document.querySelector('[data-code="CapsLock"]'));
        keyboardState.capsLock = false;
      }
    }
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (!repeat) {
      if (keyboardState.capsLock === false) {
        changeClass('.shift-on');
        keyboardState.shift = true;
      } else {
        changeClass('.caps-on-shift-on');
        keyboardState.shift = true;
      }
    }
  }
  if (event.code !== 'CapsLock' && KEY_CODES.includes(event.code)) {
    printKeyboard(event.code);
    if (!repeat) {
      // todo: при правом alt  выбирается ctrl
      addAnimationClass(document.querySelector(`[data-code="${event.code}"]`));
    }
  }
}

function onKeyUp(event) {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (keyboardState.capsLock === false) {
      changeClass('.base');
      keyboardState.shift = false;
    } else {
      changeClass('.caps-on');
      keyboardState.shift = false;
    }
  }
  if (event.code !== 'CapsLock' && KEY_CODES.includes(event.code)) {
    removeAnimationClass(document.querySelector(`[data-code="${event.code}"]`));
  }
}

function onMouseDown(event) {
  if (event.target.closest('.key')) {
    const dataCode = event.target.closest('.key').dataset.code;
    printKeyboard(dataCode);
    if (dataCode === 'CapsLock') {
      if (keyboardState.capsLock === false) {
        changeClass('.caps-on');
        addAnimationClass(event.target.closest('.key'));
        keyboardState.capsLock = true;
      } else {
        changeClass('.base');
        removeAnimationClass(event.target.closest('.key'));
        keyboardState.capsLock = false;
      }
    } else if (dataCode === 'ShiftLeft' || dataCode === 'ShiftRight') {
      if (document.querySelector('[data-code="ShiftLeft"]').classList.contains('animation')) {
        removeAnimationClass(document.querySelector('[data-code="ShiftLeft"]'));
      }
      if (document.querySelector('[data-code="ShiftRight"]').classList.contains('animation')) {
        removeAnimationClass(document.querySelector('[data-code="ShiftRight"]'));
      }
      addAnimationClass(event.target.closest('.key'));
      if (keyboardState.capsLock === false) {
        changeClass('.shift-on');
        keyboardState.shift = true;
      } else {
        changeClass('.caps-on-shift-on');
        keyboardState.shift = true;
      }
    } else {
      keyboardState.selectMouse = event.target.closest('.key');
      addAnimationClass(event.target.closest('.key'));
    }
  }
}

function onMouseUp(event) {
  if (event.target.closest('.key')) {
    if (event.target.closest('.key').dataset.code === 'ShiftLeft' || event.target.closest('.key').dataset.code === 'ShiftRight') {
      removeAnimationClass(event.target.closest('.key'));
      if (keyboardState.capsLock === false) {
        changeClass('.base');
        keyboardState.shift = false;
      } else {
        changeClass('.caps-on');
        keyboardState.shift = false;
      }
    }
  }
  if (keyboardState.selectMouse) {
    if (keyboardState.selectMouse.dataset.code === 'ShiftLeft' || keyboardState.selectMouse.dataset.code === 'ShiftRight') {
      if (keyboardState.capsLock === false) {
        changeClass('.base');
        keyboardState.shift = false;
      } else {
        changeClass('.caps-on');
        keyboardState.shift = false;
      }
    }
    removeAnimationClass(keyboardState.selectMouse);
    keyboardState.selectMouse = null;
  }
}

function onClick(event) {
  if (event.target.closest('.key')) {
    if (!document.querySelector('textarea').onfocus) {
      document.querySelector('textarea').focus();
    }
  }
}

document.addEventListener('keydown', (event) => onKeyDown(event));
document.addEventListener('keyup', (event) => onKeyUp(event));
document.addEventListener('mousedown', (event) => onMouseDown(event));
document.addEventListener('mouseup', (event) => onMouseUp(event));
document.addEventListener('mouseup', (event) => onClick(event));

window.onload = () => {
  generateKeyboard();
  document.querySelector('textarea').addEventListener('click', (event) => {
    keyboardState.cursorPosition = event.target.selectionStart;
  });
};
