function updateTeamFlags(matches) {
  const availableFlags = [
    "india",
    "pakistan",
    "australia",
    "england",
    "newzealand",
    "southafrica",
    "srilanka",
    "bangladesh",
    "afghanistan",
    "netherlands",
    "zimbabwe",
    "westindies"
  ];

  const normalize = (name) => name.toLowerCase().replace(/\s/g, '');

  matches.forEach(match => {
    [match.team1, match.team2].forEach(team => {
      const name = normalize(team.name);
      if (availableFlags.includes(name)) {
        team.flag = `../assets/${name}.png`;
      } else {
        team.flag = `../assets/default.png`; // default image
      }
    });
  });

  return matches; // optional: return updated array
}
