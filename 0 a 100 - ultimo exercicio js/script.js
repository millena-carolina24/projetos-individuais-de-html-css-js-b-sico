
var res = document.getElementById("res")
var txt = document.getElementById("txt")
var listaDeNumeros = []

function clicar() {

  var n = document.getElementById("numero")
  var numero = Number(n.value) //como eu vou buscar o número só quando clicar, é preciso tá dentro da função


  if (listaDeNumeros.includes(numero) || numero == 0) {

    window.alert("Valor inválido")



  }

  else if (numero >= 1 && numero <= 100) {


    listaDeNumeros.push(numero)

    res.innerHTML += `<br> Você digitou ${numero} `




  }

}

function somar(n1) {

  var somaDosNumeros = n1.reduce((accumulator, value) => accumulator + value, 0) //codigo usado para somar valor das variáveis, a var somaDosNumeros recebe esse valor




  return somaDosNumeros //retorna essa soma quando for chamado
}

function media(n1, n2) {


  for (i = 0; i <= n1.length; i++) { //a quantida de vezes que foi escrito numero, n1=lista de numeros
 
    var media = n2 / i //n2=soma
  }

  return media
}



function executar() {


  var soma = somar(listaDeNumeros) //manda para a função o valor lista de numeros
  var media1 = media(listaDeNumeros, soma) //mandei para media a lista de numeros e o resultado da função soma
  var maior2 = Math.max.apply(null, listaDeNumeros)
  var menor = Math.min.apply(null, listaDeNumeros)

  txt.innerHTML = `Os números digitados foram ${listaDeNumeros}`
  txt.innerHTML += `<br>Foram digitados ${listaDeNumeros.length} números`
  txt.innerHTML += `<br>O número maior digitado foi ${maior2}`
  txt.innerHTML += `<br>O número menor digitado foi ${menor}`
  txt.innerHTML += `<br>A soma dos valores: ${soma}`
  txt.innerHTML += `<br>A média dos valores: ${media1}`



}



