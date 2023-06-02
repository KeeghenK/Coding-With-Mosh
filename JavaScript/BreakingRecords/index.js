
breakingRecords([12,24,10,24]);

function breakingRecords(scores) {
    let min = 0;
    let max = 0;
    let minBreaks = 0;
    let maxBreaks = 0;
    for (i = 0; i < scores.length; i++) {
        if (min === 0 && max === 0) {
            min = scores[i];
            max =scores[i];
        }
        if (scores[i] < min) {
            min = scores[i];
            minBreaks++
        }
        if (scores[i] > max) {
            max = scores[i];
            maxBreaks++
        }
    }
    console.log([maxBreaks, minBreaks]);
}