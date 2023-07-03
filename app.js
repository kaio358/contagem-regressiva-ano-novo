
const arrayNomes = ["days","hours","minutes","seconds"]
const loading = document.getElementById("loading")
const countdown = document.getElementById("countdown")
function calculaTempo() {
    const atual = new Date();
    const fim = new Date(atual.getFullYear()+1+",01,01");
    const falta = fim - atual
    var tempo =[]
    tempo.push(parseInt( falta /1000/60/60/24))
    tempo.push(parseInt( falta /1000/60/60)% 24)
    tempo.push(parseInt( falta /1000/60)% 60)
    tempo.push( parseInt( falta /1000)% 60)

    for(var i in arrayNomes){
        const h2 = document.getElementById(arrayNomes[i])
    
        h2.textContent = tempo[i]
        
    }
    const year = document.getElementById("year")
    year.textContent = atual.getFullYear()
}
setTimeout(()=>{
    loading.remove()
    countdown.style.display = "flex"
},1000)
setInterval(calculaTempo,1000);
