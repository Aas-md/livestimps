// import matches  from '../db.js';
import { renderMatches } from './render.js';
import { fetchLiveMatches } from './api.js';




let matches = await fetchLiveMatches()

renderMatches(matches)









