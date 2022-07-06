let n = 5;
let m = 4;
let k = 2;
matrix = []

for(let i = 0 ; i < n ; i++ ){
    matrix.push(new Array(n))
}

let i = 0
let j = 0
let dirI = 0
let dirJ = 1
let count = 1

while(count <= n ** 2){
  matrix[i][j] = count;
  if(i + dirI == n
    || j + dirJ == n
    || j + dirJ == -1
    || matrix[i + dirI][j + dirJ] != undefined){

      let temp = dirI
      dirI = dirJ
      dirJ = -temp
    }

    i = i + dirI
    j = j + dirJ
    count++;
}
console.log(matrix[m - 1][k - 1]);
