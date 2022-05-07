# RSS Virtual Keyboard
### Deploy: https://vanya1000.github.io/Virtual-Keyboard/
### Branch development: https://github.com/Vanya1000/Virtual-Keyboard/tree/keyboard
#### - Для сборки проекта использовался webpack, а так же ESLint с конфигом (eslint-config-airbnb-base).
#### - Файл package.json содержит все необходимые зависимости для установки и дальнейшей проверки.
```sh
npm install
```
## Самопроверка: ниже приведены требования и мои комментарии 
## Score: 110 / 110
 [x] Minimal scope:
> [x] the generation of DOM elements is implemented. body in the index.html is empty (can contain only script tag): (20/20)
comment:(Генерация элементов происходит через js)

> [x] pressing a key on a physical keyboard highlights the key on the virtual keyboard (you should check keystrokes of numbers, letters, punctuation marks, backspace, del (if it's present), enter, shift, alt, ctrl, tab, caps lock, space, arrow keys: (10/10)
comment:(Полностью реализованно)

[x] Basic scope:
>[x] switching keyboard layouts between English and another language is implemented. Selected language should be saved and used on page reload. A keyboard shortcut for switching a language should be specified on the page: (15/15)
comment:(Переключение происходит по сочетанию клавиш левый ctrl + левый alt)

>[x] mouse clicks on buttons of the virtual keyboard or pressing buttons on a physical keyboard inputs characters to the input field (text area): (15/15)
comment:(Полностью реализованно)

[x] Extra scope:
>[x] animation of pressing a key is implemented: (15/15)
comment:(Используется анимация с @keyframes)

[x] Technical requirements:
>[x]  usage of ES6+ features (classes, property destructuring, etc): (15/15)
comment:(Использовал из ES6+: cтрелочные функции, Let и const, шаблоны строк, класc, деструктуризацию)

>[x] usage of ESLint: (10/10)
comment:(Полностью реализованно)

>[x] requirements to the repository, commits and pull request are met: (10/10)
comment:(Полностью соблюдены)

[x]  Penalties:  there're errors related to the executable code (errors like favicon.ico: Failed to load resource: the server responded with a status of 404 are not taken into account) or there're eslint-config-airbnb-base warnings:  (no-errors)
comment:(Ошибок нет)
