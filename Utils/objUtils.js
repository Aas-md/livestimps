export function getRandomImage() {
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
