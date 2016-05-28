/*

	Design an algorithm to figure out if someone has won a game of tic-tac-toe.

*/

/*


	Things to ask yourselve: How many possible options can a tic-tac-toe have? 
	It can have 3^n. In a 3x3 board, you can have 3^9 options.

	Represent the tic-tac-toe as an int, with each digit representing
	a piece (0 => empty | 1 => red | 2 => blue)

	Set up a hash table or array in advance with all possible boards as keys and the value
	indicating who has won.

*/

function hasWon(board) {

	//	Check rows
	for(var i = 0 ; i < 3 ; i++){
		var turn = board[0][i];
		if(board[0][i] == turn && board[1][i] == turn && board[2][i] == turn){
			console.log('winner is: ', turn);
			return;
		}
	}
	//	Check columns		
	for(var i = 0 ; i < 3 ; i++){
		var turn = board[i][0];
		if(board[i][0] == turn && board[i][1] == turn && board[i][2] == turn){
			console.log('winner is: ', turn);
			return;
		}
	}
	for(var i = 0 ; i < 3 ; i++){
		var turn = board[0][i];
		if(board[0][i] == turn && board[1][i] == turn && board[2][i] == turn){
			console.log('winner is: ', turn);
			return;
		}
	}
	//	Check left diagonal
	if(board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
		console.log('winner is: ', board[1][1]);
		return;
	}

	//	Check right diagonal
	if(board[0][2] == board[1][1] && board[1][1] == board[2][0]){
		console.log('winner is: ', board[1][1]);
		return;
	}
	
	console.log('-----------');
}


var game = [["x","o","x"],["x","x","o"],["x","x","x"]];
var gameTwo = [['x','o','x'],['x','x','o'],['o','x','o']];
hasWon(game);
hasWon(gameTwo);
