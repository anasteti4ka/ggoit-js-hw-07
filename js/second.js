const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingrRef = document.querySelector('#ingredients');
const elem = [];


ingredients.map(ingredient => {
  const elemLi = document.createElement('li')
  elemLi.textContent = ingredient;
  elem.push(elemLi)
})
ingrRef.append(...elem)