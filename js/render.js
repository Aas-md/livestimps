

export function renderMatches(matches) {

    const container = document.querySelector('.cards');
    container.innerHTML = '';
    matches.forEach(match => {
        const card = document.createElement('div');

        card.className = 'card';

        card.innerHTML = `
    <div class="box">
        <div class="team">
            <img src="${match.team1.flag}" height="16px" width="24px" alt="icon">
            <span>${match.team1.name}</span>
        </div>
        <div class="score">
            <span>${match.team1.score}</span>
        </div>
    </div>

    <div class="box">
        <div class="team">
            <img src="${match.team2.flag}" height="16px" width="24px" alt="icon">
            <span>${match.team2.name}</span>
        </div>
        <div class="score">
            <span>${match.team2.score}</span>
        </div>
    </div>

    <hr>

    <div class="box">
        <span class="live">${match.status}</span>
        <button>View Score</button>
    </div>
  `;

      
        card.addEventListener('click', () => {
            window.location.href = `../public/score.html?id=${match.id}`;
        });

        container.appendChild(card);
    });
}

export function renderScoreData(data) {


    document.querySelector('.matchInfo h1').textContent = `${data.name}`;

    document.querySelector('.matchInfo .box:nth-child(2) span:last-child').textContent = data.venue;
    document.querySelector('.matchInfo .box:nth-child(3) span:last-child').textContent = data.date;
    document.querySelector('.matchInfo .box:nth-child(4) span:last-child').textContent = data.format;
    document.querySelector('#result').textContent = data.result; // ya required run rate ka text


    const teamOne = document.querySelector('.scoreBox .team-one');
    teamOne.querySelector('img').src = data.team1.img;
    teamOne.querySelector('img').alt = `${data.team1.name} flag`;
    teamOne.querySelector('h2').textContent = data.team1.name;
    teamOne.querySelector('.scoreSpan').textContent = data.team1.score;


    // Team Two
    const teamTwo = document.querySelector('.scoreBox .team-two');
    teamTwo.querySelector('img').src = data.team2.img;
    teamTwo.querySelector('img').alt = `${data.team2.name} flag`;
    teamTwo.querySelector('h2').textContent = data.team2.name;
    teamTwo.querySelector('.scoreSpan').textContent = data.team2.score;
    //button name rendering 
    let btnTeamOne = document.getElementById('btn-team1')
    let btnTeamTwo = document.getElementById('btn-team2')
    btnTeamOne.textContent = data.team1.name;
    btnTeamTwo.textContent = data.team2.name;


    renderScorecards(data)

}

function renderScorecards(data) {
    // Team 1 Batting



    console.log("inside the render score card section")
    let team1BattingHTML = data.team1.batting?.map(player => `
        <tr>
            <td>
                <div class="player-info">
                    <div><img src="${player.img}" alt="img" height="24" width="24" style="border-radius:50%;"></div>
                    <div class="player-name">
                        <span>${player.name}</span>
                        <span>${player.status}</span>
                    </div>
                </div>
            </td>
            <td>${player.run}</td>
            <td>${player.bowl}</td>
            <td>${player.four}</td>
            <td>${player.six}</td>
            <td>${player.sr}</td>
            <td>${player.status}</td>
        </tr>
    `).join('');

    let team1BowlingHTML = data.team1.bowling?.map(player => `
        <tr>
            <td>
                <div class="player-info">
                    <div><img src="${player.img}" alt="img" height="24" width="24" style="border-radius:50%;"></div>
                    <div class="player-name">
                        <span>${player.name}</span>
                        <span>${player.action}</span>
                    </div>
                </div>
            </td>
            <td>${player.over}</td>
            <td>${player.maiden}</td>
            <td>${player.run}</td>
            <td>${player.wicket}</td>
            <td>${player.eco}</td>
            <td>${player.action}</td>
        </tr>
    `).join('');

    let team2BattingHTML = data.team2.batting?.map(player => `
        <tr>
            <td>
                <div class="player-info">
                    <div><img src="${player.img}" alt="img" height="24" width="24" style="border-radius:50%;"></div>
                    <div class="player-name">
                        <span>${player.name}</span>
                        <span>${player.status}</span>
                    </div>
                </div>
            </td>
            <td>${player.run}</td>
            <td>${player.bowl}</td>
            <td>${player.four}</td>
            <td>${player.six}</td>
            <td>${player.sr}</td>
            <td>${player.status}</td>
        </tr>
    `).join('');


    let team2BowlingHTML = data.team2.bowling?.map(player => `
        <tr>
            <td>
                <div class="player-info">
                    <div><img src="${player.img}" alt="img" height="24" width="24" style="border-radius:50%;"></div>
                    <div class="player-name">
                        <span>${player.name}</span>
                        <span>${player.action}</span>
                    </div>
                </div>
            </td>
            <td>${player.over}</td>
            <td>${player.maiden}</td>
            <td>${player.run}</td>
            <td>${player.wicket}</td>
            <td>${player.eco}</td>
            <td>${player.action}</td>
        </tr>
    `).join('');



    const battingData1 = document.getElementById('batting-data-1');
    const bowlingData1 = document.getElementById('bowling-data-1');
    const battingData2 = document.getElementById('batting-data-2');
    const bowlingData2 = document.getElementById('bowling-data-2');

    battingData1.innerHTML = team1BattingHTML
    bowlingData1.innerHTML = team1BowlingHTML
    battingData2.innerHTML = team2BattingHTML
    bowlingData2.innerHTML = team2BowlingHTML


}

