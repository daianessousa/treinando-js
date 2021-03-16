function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('verifique os dados e faça de novo')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'manha.png')
            } else if (idade < 21 ) {
                //jovem
                img.setAttribute('src', 'tarde.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src','tarde.png')
            } else {
                //idoso
                img.setAttribute('src', 'noite.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'manha.png')
            } else if (idade < 21 ) {
                //jovem
                img.setAttribute('src', 'tarde.png')
            } else if (idade < 50 ) {
                // adulto
                img.setAttribute('src', 'tarde.png')
            } else {
                //idoso
                img.setAttribute('src', 'noite.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
    }
}