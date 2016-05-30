/*
 *
 *	Write a method that, given a guess and a solution, returns the number of hits and 
 *	pseudo-hits
 *
 *	For example, if the actual solution is RGBY and you guess GGRR, you have one hit and
 *	one pseudo-hit
 *
 */
function playGame(guess, solution) {
	var hitCount = 0,
	    pseudoHitCount = 0,
	    pseudoCharArr = [];

	// For each character, see if there is match
	// If not, save the index and check after if there is a pseudoHit
	for(var i = 0, length = solution.length ; i < length ; i++) {
		if(guess[i] === solution[i]) {
			hitCount++;
		}else {
			checkForPseudo(i);
		}
	}

	console.log('Hit count: ' + hitCount);
	console.log('Pseudo hit count: ' + pseudoHitCount);

	// If index in guess can be found anywhere else in the solution, then there 
	// is a pseudo hit
	function checkForPseudo(index) {
		for( var i = 0, length = solution.length; i < length ; i++) {
			if(index != i && guess[index] === solution[i] && isInSet(guess[i], pseudoCharArr) == false) {
				pseudoHitCount++;
				pseudoCharArr.push(guess[index]);
				break;
			}
		}


	}

}
/*
 *
 * This function takes a character and a set
 * This function will return true if character is in set
 * Return false otherwise
 *
 */
function isInSet(member, arr) {
	for(var i = 0, length = arr.length ; i < length ; i++ ) {
		if(arr[i] === member) {
			return true;
		}
	}
	console.log('member: ', member + ' is not in set: ' + arr.toString());
	return false;
}

var solution = "RGBY";
var guess = "GGRR";
playGame(guess, solution);
