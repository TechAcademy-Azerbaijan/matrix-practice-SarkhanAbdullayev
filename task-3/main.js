let matrix = [
    [2, 5, 3, 1, 4],
    [3, 5, 2, 3, 4],
    [4, 6, 1, 1, 3],
    [4, 5, 6, 1, 7]
]

let indexes = []

let min = Infinity

for (let i = 0 ; i < matrix.length ; i++ ) {
        for ( let j = 0 ; j < matrix[i].length ; j++ ) {
          if( matrix[i][j] < min ){
            min = matrix[i][j]
            indexes = [];
            indexes.push(i)
          }
          else if (matrix[i][j] == min && !indexes.includes(i)) {
            indexes.push(i);
          }
    }
  }
console.log(indexes);
