const addItemBtn = document.querySelector('#addItem');

addItemBtn.addEventListener("click", function(e){
    e.preventDefault();
    addItem();
    console.log(textoItem)
});

function addItem(){
    const textoItem = document.querySelector('#textoItem').value;

    if(textoItem){
    const item = document.querySelector('.item')
    const novoItem = item.cloneNode(true)
    const lista = document.querySelector('#containerLista');
    lista.appendChild(novoItem);
    }
}