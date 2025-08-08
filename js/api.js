const API_URL = "https://api.cricapi.com/v1/currentMatches"
const API_KEY = "?apikey=ef25db60-2ba9-4013-9baa-379a453f48ec"
const offset = "&offset=0"

export async function fetchLiveMatches() {

    let url = API_URL + API_KEY + offset
    const response = await fetch(url);
    const data = await response.json();

    let matches = [];

    for (let match of data.data) {
        // let score1 = `${match.score[0].r.toString()}/${match.score[0].w.toString()} (${match.score[0].o.toString()})`
        // let score2 = `${match.score[1].r.toString()}/${match.score[1].w.toString()} (${match.score[1].o.toString()})`
        let score1 = `${match.score?.[0]?.r ?? '0'}/${match.score?.[0]?.w ?? '0'} (${match.score?.[0]?.o ?? '0'})`;
        let score2 = `${match.score?.[1]?.r ?? '0'}/${match.score?.[1]?.w ?? '0'} (${match.score?.[1]?.o ?? '0'})`;

        let curr = {

            status: match.matchEnded ? "COMPLETED" : match.matchStarted ? "LIVE" : "UPCOMING",
            team1: { name: match.teamInfo[0].shortname, flag: match.teamInfo[0].img, score: score1 },
            team2: { name: match.teamInfo[1].shortname, flag: match.teamInfo[1].img, score: score2 },

        }

        matches.push(curr);

    }

    return matches

}

score_url = 'https://api.cricapi.com/v1/match_scorecard?apikey=ef25db60-2ba9-4013-9baa-379a453f48ec&id=${match_id}'