function arrayIntersection(arrOne, arrTwo) {
    const intercestion = [];
    for (let i = 0;  i < arrOne.length; i++) {
        if (arrOne.includes(arrTwo[i])) {
            intercestion.push(arrTwo[i])
        }
    }

    return intercestion
}

module.exports = arrayIntersection;
