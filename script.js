let app = document.getElementById('app');
let shoppingList = ['Melk', 'Kremfløte', 'Egg', 'Bacon']
let myList = '';
let item;


updateView()
showList()
function updateView() {
  app.innerHTML = /*html*/`
      <h1>Handleliste</h1>
      <input 
      id="input"
      type="text"
      name="Handleliste" 
      oninput="item = this.value"
      >
      <input
      type="button"
      value="Legg til i handlelisten" 
      onclick="addToList(item)"
      >
      <div id="list">${myList}</div>
  `
}

function showList() {  
    myList;
    for (let i = 0; i < shoppingList.length; i++){
        let showItems = shoppingList[i];
        myList += `<li>${showItems + ' '}</li>`;
    };
    updateView();
    myList = '';
};

function addToList() {
    let input = document.getElementById('input');
    shoppingList.push(item);
    if (input.value != "") {
        input.value = "";
    };
showList()
};