function displayLikes(array) {
    let length = array.length;
    if (length === 0) {
        return `no one likes this`
    } else if (length === 1) {
        return `${array[0]} likes this`
    } else if (length === 2) {
        return `${array[0]} and ${array[1]} like this`
    } else if (length === 3) {
        return `${array[0]}, ${array[1]} and ${array[2]} like this`
    } else {
        return `${array[0]}, ${array[1]} and ${length - 2} others like this`
    }
}

module.exports = displayLikes;
