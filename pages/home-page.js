// import matches  from '../db.js';
import { renderMatches } from './render.js';
import { fetchLiveMatches } from './api.js';
import { showErrorUI } from '../Utils/Exception.js';


let btn = document.querySelector('#btn-api')



btn.addEventListener('click',async ()=>{

let matches = await fetchLiveMatches()
renderMatches(matches)
})










