function truncateString(str, num) {
    let word = [];
    let length = str.length;
    if (length > num) {
        for (let i = 0; i < num; i++) {
            word.push(str[i]);
        }
        return word.join('') + '....';
    }
    return str;
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8)); // Output: 'A-tisket....'