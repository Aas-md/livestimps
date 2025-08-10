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
            img : getRandomImage().img
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
            action : getRandomImage().action,
            img : getRandomImage().img
        }

        bowlingArr.push(currBowler)
    }
    return bowlingArr
}


function getRandomImage() {
    let randomImageAndName = [
        { action: 'Left Arm fast', img: 'https://listwr.com/5dSCCc' },
        { action: 'Right Arm fast', img: 'https://listwr.com/Cy6IBT' },
        { action: 'Left arm medium', img: 'https://listwr.com/0rgNzU' },
        { action: 'Right arm medium', img: 'https://listwr.com/ydCoib' },
        { action: 'Right arm off spin', img: 'https://shorturl.at/vI9Uh' },
        { action: 'Left arm off spin', img: 'https://shorturl.at/OEPBZ' },
        { action: 'Leg break', img: 'https://shorturl.at/ohMpy' },
        { action: 'Left arm leg break', img: 'https://shorturl.at/fYGdE' }
    ];
    
    let randomNum = Math.floor(Math.random() * 8);
    return randomImageAndName[randomNum];
}


export function makePlayerProfileObj(data){

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


export function getDobAndAge(dobString) {
    let dob = new Date(dobString);

    // Format DOB
    let options = { day: '2-digit', month: 'long', year: 'numeric' };
    let dobReadable = dob.toLocaleDateString('en-US', options);

    // Calculate Age
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();
    let dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return `${dobReadable} (${age} years)`;
}

// Example
console.log(getDobAndAge("1996-08-22T00:00:00"));
// "22 August 1996 (29 years)"



// function getRandomImage(){

//     let  randomImageAndName= [
//         {action : 'Life Arm fast', img : 'https://listwr.com/5dSCCc'},
//         {action : 'Right Arm fast', img : 'https://listwr.com/Cy6IBT'},
//         {action : 'Left arm medium',img : 'https://listwr.com/0rgNzU'},
//         {action : "Right arm medium",img : 'https://listwr.com/ydCoib'},
//         {action : 'Right arm off spin',img : 'https://shorturl.at/vI9Uh'},
//         {action : 'Left arm off spin',img : 'https://shorturl.at/OEPBZ'},
//         {action : 'Leg break',img : 'https://shorturl.at/ohMpy'},
//         {action : 'Left arm leg break',img : 'https://shorturl.at/fYGdE'},
//     ]
//     let randomNum = Math.floor(Math.random() * 8)
//     return randomImageAndName[randomNum]

// }






// export function formatScore(score) {

//     let formatedScore = `${score?.r ?? '0'}/${score?.w ?? '0'} (${score[0]?.o ?? '0'})`;
//     return formatedScore
// }