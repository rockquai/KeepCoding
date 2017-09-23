import $ from 'jquery';
import asyncLooper from './modules/asyncLooper';
import tmplFruitBox from './components/FruitBox.hbs';
import fruits from './assets/fruits.json';
import styleMain from './assets/css/main.css';

console.log(fruits);
console.log(styleMain);
const render = () => {
  const app = $('#app');
  app.html(tmplFruitBox({
    fruits
  }));
};

asyncLooper(render, 10, 100);
