const wordSearch = (letters, word) => {
  const lettersWidth = letters[0].length;
  const wordRev = reverseString(word);
  //checking for horizontal word
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
    if (l.includes(wordRev)) return true;
  }
  //checking for vertical word
  for (let i = 0; i < lettersWidth; i++) {
    const column = letters.map((item)=>{
      return item[i];
    }).join('');
    if (column.includes(word)) return true;
    if (column.includes(wordRev)) return true;
  }
  //checking for diagonal words
  const diagonals = getDiagonals(letters);
  for (const diagonal of diagonals) {
    if (diagonal.includes(word)) return true;
    if (diagonal.includes(wordRev)) return true;
  }

  return false;
};

const reverseString = function(str) {
  return str.split('').reverse().join('');
};

const getDiagonals = function(arr) {
  let diagonals = [];
  const arrWidth = arr[0].length;
  const arrHeight = arr.length;
  const arrRev = [...arr].reverse();

  for (let i = 0; i < arrHeight; i++) {
    diagonals.push(arr.map((item, index) => item[index + i]).join(''));
    diagonals.push(arrRev.map((item, index) => item[index + i]).join(''));
  }
  for (let j = 0; j < arrWidth; j++) {
    diagonals.push(arr.map((item, index) => item[index - j]).join(''));
    diagonals.push(arrRev.map((item, index) => item[index - j]).join(''));
  }
  return diagonals.filter((digonal) => digonal.length > 1);
};
  
  
module.exports = wordSearch;