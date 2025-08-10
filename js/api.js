import { scoreObj } from "./utils.js"

export async function fetchLiveMatches() {

    const API_URL = "https://api.cricapi.com/v1/currentMatches"
    const API_KEY = "?apikey=ef25db60-2ba9-4013-9baa-379a453f48ec"
    const offset = "&offset=0"

    let url = API_URL + API_KEY + offset
    const response = await fetch(url);
    const data = await response.json();

    let matches = [];

    for (let match of data.data) {
     
        let score1 = `${match.score?.[0]?.r ?? '0'}/${match.score?.[0]?.w ?? '0'} (${match.score?.[0]?.o ?? '0'})`;
        let score2 = `${match.score?.[1]?.r ?? '0'}/${match.score?.[1]?.w ?? '0'} (${match.score?.[1]?.o ?? '0'})`;

        let curr = {

            id : match.id,
            status: match.matchEnded ? "COMPLETED" : match.matchStarted ? "LIVE" : "UPCOMING",
            team1: { name: match.teamInfo[0].shortname, flag: match.teamInfo[0].img, score: score1 },
            team2: { name: match.teamInfo[1].shortname, flag: match.teamInfo[1].img, score: score2 },
            

        }
        console.log(match)
        matches.push(curr);

    }

    return matches

}

export async function fetchScore(match_id) {

        const API_URL = "https://api.cricapi.com/v1/match_scorecard"
    // const API_KEY = "92155edc-b3f5-4aa7-a479-b1926bb976ed"
    const API_KEY = "ef25db60-2ba9-4013-9baa-379a453f48ec"
    // const match_id = 'a4380c28-53b1-4554-b537-59c6822ed787'
   

    console.log("api hit succeshsgjh")
    let url = `${API_URL}?apikey=${API_KEY}&offset=0&id=${match_id}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    let score = scoreObj(data.data)
    console.log(score)
    return score;

}











// let temp = "https://api.cricapi.com/v1/match_scorecard?apikey=92155edc-b3f5-4aa7-a479-b1926bb976ed&offset=0&id=0b12f428-98ab-4009-831d-493d325bc555"
