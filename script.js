let comida;
function selecionarComida (com){
    //quando clicar em para adicionar bordavede mudar .icone para display:inline
    
    const selecionado = document.querySelector (".alimento .bordaverde");
    if (selecionado !== null){
    
    selecionado.classList.remove("bordaverde");
    }
    const item = document.querySelector(com);
    item.classList.add("bordaverde");
    
    comida = item.innerHTML;
    habilitarbotao()
}
let bebida;
function selecionarBebida (beb){
    
    const selecionado = document.querySelector (".bebidas .bordaverde");
    if (selecionado !== null){
    
    selecionado.classList.remove("bordaverde");
    }
    const item = document.querySelector(beb);
    item.classList.toggle("bordaverde");
    

    bebida =item.innerHTML;
    habilitarbotao()
}
let sobremesa;
function selecionarSobremesa (sob){
    
    const selecionado = document.querySelector (".sobremesas .bordaverde");
    if (selecionado !== null){
    
    selecionado.classList.remove("bordaverde");
    }
    const item = document.querySelector(sob);
    item.classList.toggle("bordaverde");
   
    
    sobremesa = item.innerHTML;
    habilitarbotao()
}
function habilitarbotao(){
    if (comida !== undefined && bebida !== undefined && sobremesa !== undefined){
        const botaocinza = document.querySelector('.botaocinza');
        const botaoselecionado = document.querySelector('.botaoselecionado');
        botaocinza.style.display="none";
        botaoselecionado.style.display="flex";

    }
}
function enviarwpp (){
    let precoComida = (document.querySelector (".alimento .bordaverde .preco .numeroPreco")).innerHTML;

    let precoBebida = document.querySelector (".bebidas .bordaverde .preco .numeroPreco").innerHTML;

    let precoSobremesa = document.querySelector (".sobremesas .bordaverde .preco .numeroPreco ").innerHTML;
   
   let total =Number(precoComida)+Number(precoBebida)+Number(precoSobremesa);

    let comidaConfirmada = document.querySelector (".alimento .bordaverde .nome-alimento")
    let bebidaConfirmada = document.querySelector (".bebidas .bordaverde .nome-alimento")
    let sobremesaConfirmada = document.querySelector (".sobremesas .bordaverde .nome-alimento")
    let texto = `Olá, gostaria de fazer o pedido:
                - Prato: ${comidaConfirmada.innerHTML}
                - Bebida: ${bebidaConfirmada.innerHTML}
                - Sobremesa: ${sobremesaConfirmada.innerHTML}
                Total: R$`+ total.toFixed(2);
    let textoCripto = encodeURIComponent(texto);

    window.location.href ="https://wa.me/5531983683679?text="+textoCripto
     
    
}