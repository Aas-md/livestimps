import { fetchScore,  } from "./api.js"
import { renderScoreData } from "./render.js"


let btnBatting = document.querySelector('#btn-batting')
let btnBowling = document.querySelector('#btn-bowling')
let battingSsection = document.querySelector('#batting-section')
let bowlingSection = document.querySelector('#bowling-section')



btnBatting.addEventListener('click', () => {

    battingSsection.classList.remove('hide')
    bowlingSection.classList.add('hide')

    btnBatting.classList.add('active')
    btnBowling.classList.remove('active')

})

btnBowling.addEventListener('click', () => {
    bowlingSection.classList.remove('hide')
    battingSsection.classList.add('hide')

    btnBowling.classList.add('active')
    btnBatting.classList.remove('active')
})



let btnMain = document.querySelector('#btnMain');

btnMain.addEventListener("click", async() => {
    let scoreData =await fetchScore()
    
    renderScoreData(scoreData)
    
})