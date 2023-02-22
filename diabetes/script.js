function verificar() {
var glic = document.getElementById("glic")
var glicose= Number(glic.value)
var res = document.getElementById('res')
var classificação = document.getElementById('class')
var n = document.getElementById('nome')
var nome = n.value


classificação.innerHTML=`Olá ${nome}, seu nível de glicose está:`

if (glicose < 100) {

    res.innerHTML=  "<strong>Normal</strong>"
    res.style.color="green"
} else if (glicose < 140) {

    res.innerHTML= '<strong>Elevado</strong>'
    res.style.color="orange"
} else {

    res.innerHTML= '<strong>Muito alto, </strong> procure um médico para possibilidade de diabetes.'
    res.style.color="red"
}

}