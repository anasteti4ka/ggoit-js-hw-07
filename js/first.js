const lRef = document.querySelector('#categories');
const catRef = document.querySelectorAll('.item')
console.log(`В списке ${lRef.children.length} категории.`)

const getCategories = (cat) => {
  cat.forEach(element => 
    console.log(`
    Категория: ${element.firstElementChild.textContent}
    Количество элементов: ${element.lastElementChild.children.length}`))
}
getCategories(catRef)