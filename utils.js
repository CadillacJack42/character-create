export function makeStatsString(headCount, middleCount, bottomCount) {
    return `You clicked on the head ${headCount} times, on the middle ${middleCount} times, and on the bottom ${bottomCount} time. And everybody loves your character's catchphrases:`;
}

export function textFormatter(text){
    let str = '';
    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        if (element !== '-') {
            str += element;
        } else {
            break;
        }
        
    }
    return str;
}