/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sortArr = arr.slice().sort((a, b) => a - b);
    let rank = {};
    currentRank = 1;
    
    for(let i = 0; i < sortArr.length; i++) {
        if (rank[sortArr[i]] === undefined) {
            rank[sortArr[i]] = currentRank;
            currentRank++;
        }
    }
    
    for(let i=0; i< arr.length; i++) {
        if(rank[arr[i]]) {
            arr[i] = rank[arr[i]]
        }
    }
    
    return arr;
};