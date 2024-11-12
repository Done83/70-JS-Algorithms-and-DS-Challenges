function removeDuplicates(arr) {
    let newArr = new Set(arr)
    return [...newArr]
}

module.exports = removeDuplicates;
