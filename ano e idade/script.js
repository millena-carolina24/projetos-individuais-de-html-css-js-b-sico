function verificar () {

    var data= new Date()
    var ano = data.getFullYear()
    var fan = window.document.getElementById('txtano')
    var fano= Number(fan.value)
    var res= document.getElementById('res')

    if (fano.length == 0 || fano > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")

    } else {
        var fsex = document.getElementsByName('radsex')
        var foto= document.getElementById('img')
        var idade = ano - fano
        var gênero = ""
        if (fsex[0].checked) {
            gênero = "Homem"
            if (idade >=0 && idade <10) {
                imagem.src="foto-bebe-m.png" 
            }else if (idade <21) {
                    imagem.src="foto-jovem-m.png"
            } else if (idade<50) {
                imagem.src="foto-adulto-m.png"

            } else {
                imagem.src="foto-idoso-m.png"
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >=0 && idade <10) {
                imagem.src="foto-bebe-f.png"
            }else if (idade <21) {
                imagem.src="foto-jovem-f.png"
            } else if (idade<50) {
                imagem.src="foto-adulto-f.png"

            } else {
                imagem.src="foto-idoso-f.png"
            }
        }
        

        res.style.textAlign="center"
        
        res.innerHTML= `Detectamos ${gênero} com ${idade} anos.`

       
}
}