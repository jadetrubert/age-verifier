function verify() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtyear')
    var res = document.getElementById('res')

    if (fano.value == '0' || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //img;setAttribute('class', 'foto')

        if(fsex[0].checked) {
            genero = 'male'
            if (idade >=0 && idade < 7) {
                img.setAttribute('src', 'imgs/2.png')
                
            } else if (idade >= 7 && idade < 14) {
                img.setAttribute('src', 'imgs/4.png')
            
            } else if (idade >= 14 && idade < 35) {
                img.setAttribute('src', 'imgs/6.png')
            } else if (idade >= 35 && idade < 60) {
                img.setAttribute('src', 'imgs/8.png')
            } else if (idade >= 60 && idade < 80) {
                img.setAttribute('src', 'imgs/10.png')
            } else {
                img.setAttribute('src', 'imgs/11.png')
            }
            }
        else {
            genero = 'female'
            if (idade >=0 && idade < 7) {
                img.setAttribute('src', 'imgs/1.png')
            } else if (idade >= 7 && idade < 14) {
                img.setAttribute('src', 'imgs/3.png')
            } else if (idade >= 14 && idade < 35) {
                img.setAttribute('src', 'imgs/5.png')
            } else if (idade >= 35 && idade < 60) {
                img.setAttribute('src', 'imgs/7.png')
            } else if (idade >= 60 && idade < 80) {
                img.setAttribute('src', 'imgs/9.png')
            } else {
                img.setAttribute('src', 'imgs/12.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `We detected a ${genero} aged ${idade}.`
        res.appendChild(img)
    
    
    }
}
