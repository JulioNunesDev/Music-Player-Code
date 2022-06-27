const caixaPrincipal = document.querySelector('#caixa')
const caixaImage = document.querySelector('#image')
const tenisArray = document.querySelectorAll('.tenis')
const Black = '.black'

tenisArray.forEach((element, index) => {
    
    element.addEventListener('click', function (el,) {
        if (el.target.className === 'red') {
            alert(el.target.className)
            caixaImage.src = 'luufy.jfif'
        }
        if (el.target.className === 'blue') {
            alert(el.target.className)
            caixaPrincipal.style.backgroundColor = 'blue'
            caixaImage.src = 't.jpg'
        }
        if (el.target.className === 'yellow') {
            alert(el.target.className)
            caixaPrincipal.style.backgroundColor = 'yellow'
            caixaImage.src = 'aa.jpg'
        }
    })
})