AOS.init();

const dataEvento = new Date("Dec 12, 2024 19:00:00")
const timeData = dataEvento.getTime()

const contadorTempo = setInterval(function() {
    const agora = new Date();
    const timeAgora = agora.getTime()

    const TempoRestante = timeData - timeAgora;

    const diasEmMs = 1000 * 60 * 60 * 24
    const horasEmMs = 1000 * 60 * 60
    const minutosEmMs = 1000 * 60

    const diasParaData = Math.floor(TempoRestante / diasEmMs)
    const horaParaData = Math.floor((TempoRestante % diasEmMs) / horasEmMs)
    const minutosParaData = Math.floor((TempoRestante % horasEmMs) / minutosEmMs)
    const segundosParaData = Math.floor((TempoRestante % minutosEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diasParaData}d ${horaParaData}h ${minutosParaData}m ${segundosParaData}s` 

    if (TempoRestante < 0) {
        clearInterval(contadorTempo)
        document.getElementById('contador').innerHTML = "O evento terminou"
    }
    
}, 1000)