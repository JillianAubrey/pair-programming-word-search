const wordSearch = (letters, word) => {
  if (letters.length === 0 || letters[0].length === 0) {
    return false;
  }
  if (word.length === 0) {
    return false;
  }

  const rows = getRows(letters);
  const columns = getColumns(letters);
  const diagonals = getDiagonals(letters);
  return isWordInArray(rows, word) || isWordInArray(columns, word) || isWordInArray(diagonals, word);
};

const getDiagonals = function(arr) {
  let diagonals = [];
  const arrSize = Math.max(arr[0].length, arr.length);
  const arrRev = [...arr].reverse();

  for (let i = 0; i < arrSize; i++) {
    diagonals.push(arr.map((item, index) => item[index + i]).join(''));
    diagonals.push(arrRev.map((item, index) => item[index + i]).join(''));
    diagonals.push(arr.map((item, index) => item[index - i]).join(''));
    diagonals.push(arrRev.map((item, index) => item[index - i]).join(''));
  }
  return diagonals.filter((digonal) => digonal.length > 1);
};

const getRows = function(arr) {
  return arr.map(row => row.join(''));
}

const getColumns = function(arr) {
  const arrWidth = arr[0].length
  let columns = [];
  for (let i = 0; i < arrWidth; i++) {
    columns.push(arr.map((item)=>{
      return item[i];
    }).join(''));
  }
  return columns;
}

const reverseString = function(str) {
  return str.split('').reverse().join('');
};

const isWordInArray = function(arr, word) {
  word = word.toLowerCase();
  const wordRev = reverseString(word);
  for (const item of arr) {
    if (item.toLowerCase().includes(word) || item.toLowerCase().includes(wordRev)) {
      return true;
    }
  }
  return false;
}
  
  
module.exports = wordSearch;