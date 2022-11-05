function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var header = window.document.querySelector('header')
    var footer = window.document.querySelector('footer')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#F7DFBC'
        header.style.textShadow = '1px 1px 4px rgba(0, 0, 0, 0.4)'
        footer.style.textShadow = '1px 1px 4px rgba(0, 0, 0, 0.4)'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#FECA90'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#052234'
    }
}
