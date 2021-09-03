module.exports = function solveSudoku(matrix) {
  let nonPossibilities = {};
  let impossibleNumbers;
  let emptySpaces = 81;
  while (emptySpaces > 0) {
    emptySpaces = 0;
    for (let vert = 0; vert < matrix.length; vert++) {
      for (let horz = 0; horz < matrix.length; horz++) {
        if (matrix[vert][horz] === 0) {
          nonPossibilities = {};
          for (let i = 0; i < 9; i++) {
            if (matrix[vert][i] > 0) {
              nonPossibilities[matrix[vert][i]] = true;
            }
            if (matrix[i][horz] > 0) {
              nonPossibilities[matrix[i][horz]] = true;
            }
          }
          for (let vertBox = Math.floor(vert / 3) * 3; vertBox < Math.floor(vert / 3) * 3 + 3; vertBox++) {
            for (let horzBox = Math.floor(horz / 3) * 3; horzBox < Math.floor(horz / 3) * 3 + 3; horzBox++) {
              if (matrix[vertBox][horzBox]) {
                nonPossibilities[matrix[vertBox][horzBox]] = true;
              }
            }
          }
          impossibleNumbers = Object.keys(nonPossibilities);
          if (impossibleNumbers.length === 8) {
            for (let i = 1; i < 10; i++) {
              if (impossibleNumbers.indexOf(String(i)) < 0) {
                matrix[vert][horz] = i;
              }
            }
          } else {
            emptySpaces++;
          }
        }
      }
    }
  }
return matrix;
}