function carregar() {
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //bom dia 
        img.src = 'manha.png'
        document.body.style.background  = '#f4a261'
        msg2.innerHTML = `Bom dia`
    } else if (hora >= 12 && hora < 18){
       //boa tarde
       img.src = 'tarde.png'
       document.body.style.background = "#ffd7ba"
       msg2.innerHTML = `Boa tarde`
    } else {
        //boa noite
        img.src = 'noite.png'
        msg2.innerHTML = `Boa noite`
    }
}