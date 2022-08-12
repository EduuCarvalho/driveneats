function selecionarComida (com){
    
    const selecionado = document.querySelector (".alimento .bordaverde");
    if (selecionado !== null){
    
    selecionado.classList.remove("bordaverde");
    }
    const item = document.querySelector(com);
    item.classList.toggle("bordaverde");
}
function selecionarBebida (beb){
    
    const selecionado = document.querySelector (".bebidas .bordaverde");
    if (selecionado !== null){
    
    selecionado.classList.remove("bordaverde");
    }
    const item = document.querySelector(beb);
    item.classList.toggle("bordaverde");
}
function selecionarSobremesa (sob){
    
    const selecionado = document.querySelector (".sobremesas .bordaverde");
    if (selecionado !== null){
    
    selecionado.classList.remove("bordaverde");
    }
    const item = document.querySelector(sob);
    item.classList.toggle("bordaverde");
}
