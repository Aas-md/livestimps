

export function renderMatches(matches){

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