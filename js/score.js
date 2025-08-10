import { fetchScore, } from "./api.js"
import { renderScoreData } from "./render.js"
import { setupBattingBowlingToggle, setupTeamsToggle } from "../Utils/handleBtnTogle.js";



setupTeamsToggle(
    document.querySelector('#btn-team1'),
    document.querySelector('#btn-team2'),
    document.querySelector('#team1-section'),
    document.querySelector('#team2-section')
)

setupBattingBowlingToggle(
    document.querySelector('#btn-batting-1'),
    document.querySelector('#btn-bowling-1'),
    document.querySelector('#batting-section-1'),
    document.querySelector('#bowling-section-1')
)

setupBattingBowlingToggle(
    document.querySelector('#btn-batting-2'),
    document.querySelector('#btn-bowling-2'),
    document.querySelector('#batting-section-2'),
    document.querySelector('#bowling-section-2')
)


let btnMain = document.querySelector('#btnMain');

btnMain.addEventListener("click", async () => {
    let scoreData = await fetchScore()
   

    renderScoreData(scoreData)

})