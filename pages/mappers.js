import { formatScore } from "../Utils/stringUtils.js";
import { getRandomImage } from "../Utils/objUtils.js";


export function mapCurrentMathces(matches){
 
    let matchesObj = [];

    for (let match of matches) {

        let score1 = `${match.score?.[0]?.r ?? '0'}/${match.score?.[0]?.w ?? '0'} (${match.score?.[0]?.o ?? '0'})`;
        let score2 = `${match.score?.[1]?.r ?? '0'}/${match.score?.[1]?.w ?? '0'} (${match.score?.[1]?.o ?? '0'})`;

        let curr = {

            id: match.id,
            status: match.matchEnded ? "COMPLETED" : match.matchStarted ? "LIVE" : "UPCOMING",
            team1: { name: match.teamInfo[0]?.shortname ?? 'UEA', flag: match.teamInfo[0]?.img, score: score1 },
            team2: { name: match.teamInfo[1]?.shortname ?? 'OMAN', flag: match.teamInfo[1]?.img, score: score2 },


        }
       
        matchesObj.push(curr)

    }

    return matchesObj;

}

export function mapScore(data) {

    if(!data)return {}

    const teams = data.teamInfo || [];
    const scores = data.score || [];

    function getTeamByScore(scoreEntry) {
        if (!scoreEntry) return {};
        // "Pakistan Innings" → "Pakistan"
        const teamNameFromScore = scoreEntry.inning?.split(" Inning")[0]?.trim();
        return teams.find(t => t.name === teamNameFromScore) || {};
    }

    const team1Data = getTeamByScore(scores[0]) || teams[0];
    const team2Data = getTeamByScore(scores[1]) || teams[1];

    let score = {
        venue: data.venue,
        format: data.matchType,
        name: data.name,
        date: data.date,
        result: data.status,
        team1: {
            name: team1Data?.name,
            img: team1Data?.img,
            score: formatScore(data.score[0]),
            batting: mapbattingScorecard(data.scorecard[0]?.batting),
            bowling: mapBowlingScorecard(data.scorecard[0]?.bowling),
        },
        team2: {
            name: team2Data.name,
            img: team2Data.img,
            score: formatScore(data.score[1]),
            batting: mapbattingScorecard(data.scorecard[1]?.batting),
            bowling: mapBowlingScorecard(data.scorecard[1]?.bowling),
        }
    }

    return score
}


function mapbattingScorecard(battings = []) {
    if(!battings || battings.length == 0)return []
    let battingArr = []

    for (let batting of battings) {

        let currBatsman = {
            name: batting.batsman?.name,
            id: batting.batsman?.id,
            run: batting.r,
            four: batting['4s'],
            six: batting['6s'],
            bowl: batting.b,
            sr: batting.sr,
            status: batting['dismissal-text'],
            img : getRandomImage().img
        }
        battingArr.push(currBatsman)

    }
    return battingArr
}

function mapBowlingScorecard(bowlings = []) {
    if(!bowlings || bowlings.length == 0)return []
    let bowlingArr = []
    for (let bowling of bowlings) {

        let currBowler = {
            name: bowling.bowler?.name,
            id: bowling.bowler?.id,
            over: bowling.o,
            maiden: bowling.m,
            run: bowling.r,
            wicket: bowling.w,
            eco: bowling.eco,
            wide: bowling.wd,
            action : getRandomImage().action,
            img : getRandomImage().img
        }

        bowlingArr.push(currBowler)
    }
    return bowlingArr
}


export function mapPlayerProfileObj(data){

    if(!data)return {}

    const playerInfo = {

        name : data.name,
        country : data.country,
        dob : data.dateOfBirth,
        role : data.role,
        batStyle : data.battingStyle,
        bowlStyle : data.bowlingStyle,
        img : data.playerImg,

    }

    return playerInfo
}


