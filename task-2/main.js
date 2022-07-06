let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3],
    [4, 5, 6, 7]
]
let r = 3
let c = 2

let newmatrix = []
let arr = []

for (let i = 0 ; i < r ; i++ ) {
    for ( let j = 0 ; j < c ; j++ ) {
        arr.push(matrix[i][j])
        
    }
    newmatrix.push(arr)
    arr = []
    
}console.log(newmatrix);
