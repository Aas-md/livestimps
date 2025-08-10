export function setupTeamsToggle(btnTeam1, btnTeam2, teamOneSection, teamTwoSection) {

    btnTeam1.addEventListener('click', () => {
        teamOneSection.classList.remove('hide')
        teamTwoSection.classList.add('hide')
        btnTeam1.classList.add('active')
        btnTeam2.classList.remove('active')
    })

    btnTeam2.addEventListener('click', () => {
        teamTwoSection.classList.remove('hide')
        teamOneSection.classList.add('hide')
        btnTeam1.classList.remove('active')
        btnTeam2.classList.add('active')
    })

}

export function setupBattingBowlingToggle(btnBatting, btnBowling, battingSection, bowlingSection) {

    btnBatting.addEventListener('click', () => {
        battingSection.classList.remove('hide');
        bowlingSection.classList.add('hide');
        btnBatting.classList.add('active');
        btnBowling.classList.remove('active');
    });
    btnBowling.addEventListener('click', () => {
        bowlingSection.classList.remove('hide');
        battingSection.classList.add('hide');
        btnBowling.classList.add('active');
        btnBatting.classList.remove('active');
    });
}
