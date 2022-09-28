const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
        if (l.includes(reverseString(word))) return true
    }
    const lettersWidth = letters[0].length;
    for(i = 0; i < lettersWidth; i++) {
        const column = letters.map((item)=>{
            return item[i]
        }).join('');
        if (column.includes(word)) return true;
        if (column.includes(reverseString(word))) return true;
    }

    return false;
}

const reverseString = function(str) {
    return str.split('').reverse().join('');
}

module.exports = wordSearch