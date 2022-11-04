var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 18 || hora < 6) {
    console.log('Bom Noite!')
} else if (hora < 18 && hora >= 12) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Dia!')
}