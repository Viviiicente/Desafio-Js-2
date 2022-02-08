function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtidade')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert ('[ERRO]Verifique os dados e tente novamente')
    } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade>= 0 && idade < 10 ){
         img.setAttribute('src' , 'criançamenino.png')
        } else if (idade < 21){
            img.setAttribute('src' ,'jovemhomem.png')
        }else if ( idade < 52) {
            img.setAttribute('src', 'homem.png')
        } else {
            img.setAttribute('src' ,'idoso.png')
        }
        

    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade>= 0 && idade < 10 ){
            img.setAttribute('src' ,'criançamenina.png')
        } else if (idade < 21){
            img.setAttribute('src' ,'jovemmulher.png')
        }else if ( idade < 52) {
            img.setAttribute('src' ,'mulher.png')
        } else {
            img.setAttribute('src' ,'idosa.png')
        }
    }
    
    res.innerHTML = 'Detectamos ' + genero + ' com '  + idade + ' anos!'
    res.appendChild(img)


}

}