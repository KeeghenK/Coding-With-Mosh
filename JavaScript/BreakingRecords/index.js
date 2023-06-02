
breakingRecords([0, 9, 3, 10, 2, 20]);

function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let minBreaks = 0;
    let maxBreaks = 0;
    for (i = 0; i < scores.length; i++) {
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