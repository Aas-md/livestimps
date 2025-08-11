export function formatScore(score = {}) {
    const runs = score?.r ?? 0;
    const wickets = score?.w ?? 0;
    const overs = score?.o ?? 0;
    return `${runs}/${wickets} (${overs})`;
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