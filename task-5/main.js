let n = 5

let matrix = []

for ( let i = 0; i < n ; i++ ) {
    matrix.push(new Array(n).fill("*"))
    
}
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
}
