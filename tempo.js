const tempo = document.querySelector('.tempo')
const marcador = document.querySelector('.hora')


const getHours = new Date()
const dia = getHours.getDate().toString()
const diaF = dia.length == 1 ? '0'+dia : dia
const mes = (getHours.getMonth()+1).toString()
const mesF = mes.length == 1 ? '0'+mes : mes 
const ano = getHours.getFullYear()

const data = diaF + "/" + mesF + "/" + ano

const hora = getHours.getHours().toString()
const minutos = getHours.getMinutes().toString()
const seconds = getHours.getSeconds().toString()
const horas = hora + ':' + minutos + ':' + seconds




let tempos = setInterval(()=>{
    function horario(){ 
        marcador.innerHTML = `<h1> ${horas}</h1>`
    }
    horario()
    return (()=>{
        clearInterval(tempos)
    })
},1000)





