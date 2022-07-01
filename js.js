let musica = document.querySelector('audio')
let musicas = [
    {
        titulo: 'twenty one pilots',
        img: 'tee.webp',
        src: 'music.mp3',
        btn: ['/img/play.svg', '/img/pause.svg']
    },
    {
        titulo: 'teste',
        img: 'text',
        src: 'music.mp3'
    }
]


document.querySelector('.play').addEventListener('click', tocarMusic)
document.querySelector('.pause').addEventListener('click', pauseMusic)
let musicaFim = document.querySelector('.fim')


musica.addEventListener('timeupdate', timeUpdate)

let nomeTitulo = document.querySelector('.infors span')
let imagem = document.querySelector('.infors img')

let contadorIndex = 0

document.querySelector('.prev').addEventListener('click', ()=>{
    contadorIndex--;
    if(contadorIndex < 0){
        contadorIndex = 0
    }
    renderizarMusic(contadorIndex)
})
document.querySelector('.next').addEventListener('click', ()=>{
    contadorIndex++;
    if(contadorIndex > 2 ){
        contadorIndex = 0
    }
    renderizarMusic(contadorIndex)
})
renderizarMusic()

function renderizarMusic(index){
   musica.setAttribute('src', musicas[index].src)

    musica.addEventListener('loadeddata', ()=>{
        nomeTitulo.textContent = musicas[index].titulo
        imagem.src = musicas[index].img
        musicaFim.textContent = tempoOfMusic(Math.floor(musica.duration))
    })
} 
  


function tocarMusic(){
    document.querySelector('.play img').src = '/img/pause.svg'
    document.querySelector('.play img').style.diplay = 'none'
    musica.play()

}

function pauseMusic(){
    document.querySelector('.pause img').src = '/img/play.svg'
    document.querySelector('.pause img').style.diplay = 'block'
    musica.pause()
}


function timeUpdate(){
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = tempoOfMusic(Math.floor(musica.currentTime))
    
    musicaFim.textContent = tempoOfMusic(Math.floor(musica.duration))
    
}

function tempoOfMusic(tempo){
    let minutos =  Math.floor(tempo / 60)
    let segundos = tempo % 60
    if(segundos < 10){
        segundos = '0' + segundos
    }

    return minutos + ":" + segundos
}

