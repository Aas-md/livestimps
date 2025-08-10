import { fetchPlayerInfo } from "./api.js";
import { renderprofile } from "./render.js";

function getPlayerId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

let btn = document.querySelector('button')

btn.addEventListener('click', async () => {
    let playerId = getPlayerId()
    console.log('player id -> ', playerId)
    let playerInfo = await fetchPlayerInfo(playerId)
    renderprofile(playerInfo)
})





