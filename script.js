// evento adicionar item
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){

    e.preventDefault();
    addItem();
});

// função de remover item
function removerItem(item){
    item.parentNode.remove(true);
}

// função de dar check tarefa
function checkItem(item){
    const itemChecado = item.parentNode;
    itemChecado.classList.toggle("checado");
}

// função de adicionar item
function addItem(){
    // texto do item
    const texto = document.querySelector('#texto-item').value;

    if(texto){
    // clonar o template
    const template = document.querySelector(".template");

    const novoItem = template.cloneNode(true);

    // adicionar o texto digitado ao novoItem
    novoItem.querySelector('.textoItemLista').textContent = texto;

    // inserir novoItem na tela
    const lista = document.querySelector('#lista');
    lista.appendChild(novoItem);

    // evento de checar o item
    const check = novoItem.querySelector('#check').addEventListener("click", function(){
        checkItem(this);
    });

    // evento de retirar o item
    const remove = novoItem.querySelector('#remover').addEventListener("click",function(){
        removerItem(this);
    });

    // remover classes desnecessarias
    novoItem.classList.remove("template");
    novoItem.classList.remove("hide");

    // limpar caixa de texto
    document.querySelector('#texto-item').value="";
    };

    
};