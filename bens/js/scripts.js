let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
}

//cria um event listener que escuta mudanças no input
document.getElementById('currentNumber').addEventListener('currentNumber', function(event){
    
    //busca conteúdo do input
    var count = document.getElementById('currentNumber').value;
    
      //valida conteudo do input 
      if ( count < 0 ) {
        //habilita o botão
        document.getElementById('currentNumber').style.color = 'red';
      } else {
        //desabilita o botão se o conteúdo do input ficar em branco
        document.getElementById('currentNumber').style.color = 'black';
      }
  });

//desabilita o botão no início
document.getElementById("buttonsend").disabled = true;

//cria um event listener que escuta mudanças no input
document.getElementById("input").addEventListener("input", function(event){
    
  //busca conteúdo do input
    var conteudo = document.getElementById("input").value;
  
    //valida conteudo do input 
    if (conteudo !== null && conteudo !== '') {
      //habilita o botão
      document.getElementById("buttonsend").disabled = false;
    } else {
      //desabilita o botão se o conteúdo do input ficar em branco
      document.getElementById("buttonsend").disabled = true;
    }
});