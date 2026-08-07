var valor;
var cont;
valor = prompt('Digite um valor ');
//console.log('o valor atual é '+valor);
  for(cont=1; cont<=valor; cont++){
        if(cont % 2 == 0){
        document.write('<br><p style = "color: blue";>o valor atual é par '+cont);
        }
        else{
        document.write('<br><p style = "color: red";>o valor atual é impar '+cont);
        }
}