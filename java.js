function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 00 || Number(fano.value) > ano) {
    window.alert('Erro!! verifique os dados e tente novamente.')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = 'homem'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'criancah.png')
        window.alert('aaaaaaaaaaaaaaaa')

        //criança
      } else if (idade < 21) {
        img.setAttribute('src', 'jovem.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'homem.jpg')
        //adulto
      } else {
        img.setAttribute('src', 'veio.jpg')

        //idoso
      }
    } else if (fsex[1].checked) {
      genero = 'mulher'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'crianca m.jpg')
        //criança
      } else if (idade < 21) {
        img.setAttribute('src', 'jova.png')
        //jovem
      } else if (idade < 50) {
        img.setAttribute('src', 'mulher.jpg')

        //adulto
      } else {
        img.setAttribute('src', 'veia.jpg')

        //idoso
      }
    }
    res.innerHTML = `detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}
