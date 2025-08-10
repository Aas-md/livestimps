export function scoreObj(data) {

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
            name: team1Data.name,
            img: team1Data.img,
            score: formatScore(data.score[0]),
            batting: makeBattngScorecard(data.scorecard[0].batting),
            bowling: makeBowlingScorecard(data.scorecard[0].bowling),
        },
        team2: {
            name: team2Data.name,
            img: team2Data.img,
            score: formatScore(data.score[1]),
            batting: makeBattngScorecard(data.scorecard[1].batting),
            bowling: makeBowlingScorecard(data.scorecard[1].bowling),
        }
    }

    return score
}

function formatScore(score = {}) {
    const runs = score?.r ?? 0;
    const wickets = score?.w ?? 0;
    const overs = score?.o ?? 0;
    return `${runs}/${wickets} (${overs})`;
}

function makeBattngScorecard(battings = []) {

    let battingArr = []

    for (let batting of battings) {

        let currBatsman = {
            name: batting.batsman.name,
            id: batting.batsman.id,
            run: batting.r,
            four: batting['4s'],
            six: batting['6s'],
            bowl: batting.b,
            sr: batting.sr,
            status: batting['dismissal-text'],
        }
        battingArr.push(currBatsman)

    }
    return battingArr
}

function makeBowlingScorecard(bowlings = []) {
    let bowlingArr = []
    for (let bowling of bowlings) {

        let currBowler = {
            name: bowling.bowler.name,
            id: bowling.bowler.id,
            over: bowling.o,
            maiden: bowling.m,
            run: bowling.r,
            wicket: bowling.w,
            eco: bowling.eco,
            wide: bowling.wd,
        }

        bowlingArr.push(currBowler)
    }
    return bowlingArr
}





// export function formatScore(score) {

//     let formatedScore = `${score?.r ?? '0'}/${score?.w ?? '0'} (${score[0]?.o ?? '0'})`;
//     return formatedScore
// }