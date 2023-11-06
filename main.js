const elementoPrecoTotalCompra = document.getElementById('valor-total-compra')
const precoPassagem = 140;
let valorTotalcompra = 0 ;
let assentosSelecionados = [];

/*let objetoCadeira = {
  numeroCadeira: 1,
  ocupada: true,
  nomeComprador: "João Silva"

}*/

function  selecionarCadeira(cadeira) {
  const cadeiraSelecionada = cadeira;
  if(cadeiraSelecionada.classList.contains("ocupado")){
    return;
  }
  if(cadeiraSelecionada.classList.contains("selecionado")){
    cadeiraSelecionada.classList.remove("selecionado");
    assentosSelecionados = assentosSelecionados.filter(id => id !== cadeiraSelecionada.id);
    valorTotalcompra = assentosSelecionados.length * precoPassagem
    atualizarVizualizacaoPreco()
    return;
  }

  cadeiraSelecionada.classList.add("selecionado");
  assentosSelecionados.push(cadeiraSelecionada.id);
  valorTotalcompra = assentosSelecionados.length * precoPassagem
  atualizarVizualizacaoPreco()
}

function atualizarVizualizacaoPreco(){
elementoPrecoTotalCompra.innerText = `R$ ${valorTotalcompra}`
}

function finalizarCompra() {
  if (assentosSelecionados.length === 0){
    return;
  }
  for (const id of assentosSelecionados){
   const assentoComprado = document.getElementById(id)
   assentoComprado.classList.remove('selecionado');
   assentoComprado.classList.add('ocupado');
  }
  assentosSelecionados =[];
  valorTotalcompra = 0;
atualizarVizualizacaoPreco();

}