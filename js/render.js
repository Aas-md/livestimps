

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

        container.appendChild(card);
    });
}

export function renderScoreData(data) {


    document.querySelector('.matchInfo h1').textContent = `${data.name} Scorecard`;

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

}