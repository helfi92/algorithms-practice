/*

  Design an algorithm to find all pairs of intergers within an array which
  sum to a specified value


  Approach one: Faster but take up more space
  Approach two: Longer but takes up less space

  Approach 1: Hash map { x : remain }.
  When iterating, do { x: sum - x }

  Approach 2: Sort list. Have 2 pointers, one in beginning one at end

*/
var array = [1, 2, 5, 3, 6, 8];
function findAllPair(numArr, sum) {
    var leftPtr = 0,
        rightPtr = numArr.length - 1,
        remain,
        result = [];

    numArr.sort();
    for(var i = 0, length = numArr.length ; i < length ; i++) {
      remain = sum - numArr[i];
      for(var j = rightPtr; numArr[j] >= remain && j != i; j--) {
        if(numArr[j] == remain) {
          result.push('(' + numArr[i] + ',' + numArr[j] + ')' );
        }
      }
    }
    console.log(result);
    return result;
}

findAllPair(array, process.argv[2]);
