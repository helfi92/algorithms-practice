/*
 *
 *	Given any integer, print an English phrase that describes the integer
 *	(e.g., "One Thousand, Two Hundred Thirty Four")
 *
 *
 */


var number = process.argv[2];
var flag = false;
numberToPhrase(number);

function numberToPhrase(number) {
	var phrase = '';
	phrase = getThousand(number) + getHundred(number) + getTen(number) + getUnit(number);
	console.log(phrase);
}

function getThousand(number) {
	var mult = Number.parseInt(number / 1000, 10);
	var res = 0;
	switch(mult) {
		case 0 :
			res = "";
	       		break;
		case 1 :
			res = "One Thousand ";
			break;
		case 2 :
			res = "Two Thousand ";
			break;
		case 3 :
			res = "Three Thousand ";
			break;
		case 4 :
			res = "Four Thousand ";
			break;
		case 5 :
			res = "Five Thousand ";
			break;

		case 6 :
			res = "Six Thousand ";
			break;

		case 7 :
			res = "Seven Thousand ";
			break;
		case 8 :
			res = "Eight Thousand ";
			break;
		case 9 :
			res = "Nine Thousand ";
			break;
	}
	return res;

}

function getHundred(number) {
	var num = Number.parseInt(number / 100, 10).toString();
	var mult = Number.parseInt(number[num.length - 1], 10);
	var res = 0;
	switch(mult) {
		case 0 :
			res = "";
	       		break;
		case 1 :
			res = "One Hundred ";
			break;
		case 2 :
			res = "Two Hundred ";
			break;
		case 3 :
			res = "Three Hundred ";
			break;
		case 4 :
			res = "Four Hundred ";
			break;
		case 5 :
			res = "Five Hundred ";
			break;

		case 6 :
			res = "Six Hundred ";
			break;

		case 7 :
			res = "Seven Hundred ";
			break;
		case 8 :
			res = "Eight Hundred ";
			break;
		case 9 :
			res = "Nine Hundred ";
			break;
	}
	return res;

}

function getTen(number) {
	var num = Number.parseInt(number / 10, 10).toString();
	var mult = Number.parseInt(number[num.length - 1], 10);
	console.log('gen Ten mult: ', mult);
	var res = 0;
	switch(mult) {
		case 0 :
			res = "";
	    break;
		case 1 :
			flag = true;
			res = getUnitWhenSecondDigitFromRightIsOne(number);
			break;
		case 2 :
			res = "Twenty ";
			break;
		case 3 :
			res = "Thirty ";
			break;
		case 4 :
			res = "Fourty ";
			break;
		case 5 :
			res = "Fifty ";
			break;
		case 6 :
			res = "Sixty ";
			break;

		case 7 :
			res = "Seventy ";
			break;
		case 8 :
			res = "Eighty ";
			break;
		case 9 :
			res = "Ninety ";
			break;
	}
	return res;
}

function getUnit(number) {
	var mult = Number.parseInt(number[number.length - 1], 10);
	var res = 0;
	if(flag) {
		return '';
	}
	switch(mult) {
		case 0 :
			res = "";
	       		break;
		case 1 :
			res = "One";
			break;
		case 2 :
			res = "Two";
			break;
		case 3 :
			res = "Three";
			break;
		case 4 :
			res = "Four";
			break;
		case 5 :
			res = "Five";
			break;

		case 6 :
			res = "Six";
			break;

		case 7 :
			res = "Seven";
			break;
		case 8 :
			res = "Eight";
			break;
		case 9 :
			res = "Nine";
			break;
	}
	return res;

}


function getUnitWhenSecondDigitFromRightIsOne(number) {
	var num = Number.parseInt(number[number.length - 1], 10);
	var res = '';
	switch(num) {
		case 0 :
			res = 'Ten';
			break;
		case 1 :
			res = 'Eleven';
			break;
		case 2 :
				res = 'Twelve';
				break;
		case 3 :
			res = 'Thirteen';
			break;
		case 4 :
			res = 'Fourteen';
			break;
		case 5 :
			res = 'Fifteen';
			break;
		case 6 :
			res = 'Sixteen';
			break;
		case 7 :
			res = 'Seventeen';
			break;
		case 8 :
			res = 'Eighteen';
			break;
		case 9 :
			res = 'Nineteen';
			break;
	}
	return res;
}
