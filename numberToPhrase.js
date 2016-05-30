/*
 *
 *	Given any integer, print an English phrase that describes the integer up to 9999
 *	(e.g., 'One Thousand, Two Hundred Thirty Four')
 *
 *
 */
var thousands = [
	'One Thousand', 'Two Thousand', 'Three Thousand', 'Four Thousand',
	'Five Thousand', 'Six Thousand', 'Seven Thousand', 'Eight Thousand',
	'Nine Thousand'
],
hundreds = [
	'One Hundred', 'Two Hundred', 'Three Hundred', 'Four Hundred',
	'Five Hundred', 'Six Hundred', 'Seven Hundred', 'Eight Hundred',
	'Nine Hundred'
],
tens = [
	'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty',
	'Ninety'
],
units = [
	'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'
],
teens = [
	'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen',
	'Eighteen', 'Nineteen'
];

var number = process.argv[2],
		flag = false;

//	This function takes an integer and will output the string representation
//	of the text as a phrase
function numberToPhrase(number) {
	//	Edge Case
	var num = Number.parseInt(number, 10),
			phrase = '';
	if(num === 0) {
		phrase = 'Zero';
	//	Normal Case
	}else{
		if(num < 0) {
			phrase = 'Negative ';
			number = number.replace('-','');
		}
		phrase += getThousand(number) + ' ' + getHundred(number) + ' ' +  getTen(number) + ' ' + getUnit(number);
	}
	return phrase
}

//	Will return the thousand part of the phrase
function getThousand(number) {
	var mult = Number.parseInt(number / 1000, 10),
			res = 0;

	switch(mult) {
		case 0 :res = ''; break;
		case 1 :res = thousands[0];break;
		case 2 :res = thousands[1];break;
		case 3 :res = thousands[2];break;
		case 4 :res = thousands[3];break;
		case 5 :res = thousands[4];break;
		case 6 :res = thousands[5];break;
		case 7 :res = thousands[6];break;
		case 8 :res = thousands[7];break;
		case 9 :res = thousands[8];break;
	}
	return res;
}

//	Will return the hundred part of the phrase
function getHundred(number) {
	var num = Number.parseInt(number / 100, 10).toString(),
			mult = Number.parseInt(num[num.length - 1], 10),
			res = 0;

	switch(mult) {
		case 0 :res = '';break;
		case 1 :res = hundreds[0];break;
		case 2 :res = hundreds[1];break;
		case 3 :res = hundreds[2];break;
		case 4 :res = hundreds[3];break;
		case 5 :res = hundreds[4];break;
		case 6 :res = hundreds[5];break;
		case 7 :res = hundreds[6];break;
		case 8 :res = hundreds[7];break;
		case 9 :res = hundreds[8];break;
	}
	return res;
}

//	Will return the ten part of the phrase
function getTen(number) {
	var num = Number.parseInt(number / 10, 10).toString(),
			mult = Number.parseInt(num[num.length - 1], 10),
			res = 0;

	switch(mult) {
		case 0 :res = '';break;
		case 1 :flag = true;res = getUnitWhenSecondDigitFromRightIsOne(number);break;
		case 2 :res = tens[0];break;
		case 3 :res = tens[1];break;
		case 4 :res = tens[2];break;
		case 5 :res = tens[3];break;
		case 6 :res = tens[4];break;
		case 7 :res = tens[5];break;
		case 8 :res = tens[6];break;
		case 9 :res = tens[7];break;
	}
	return res;
}

//	Will return the last unit of the phrase
function getUnit(number) {
	var mult = Number.parseInt(number[number.length - 1], 10),
			res = 0;

	// Teens flag
	if(flag) {
		return '';
	}

	switch(mult) {
		case 0 :res = '';break;
		case 1 :res = units[0];break;
		case 2 :res = units[1];break;
		case 3 :res = units[2];break;
		case 4 :res = units[3];break;
		case 5 :res = units[4];break;
		case 6 :res = units[5];break;
		case 7 :res = units[6];break;
		case 8 :res = units[7];break;
		case 9 :res = units[8];break;
	}
	return res;
}

//	Special case when dealing with teens
function getUnitWhenSecondDigitFromRightIsOne(number) {
	var num = Number.parseInt(number[number.length - 1], 10),
			res = '';

	switch(num) {
		case 0 :res = teens[0];break;
		case 1 :res = teens[1];break;
		case 2 :res = teens[2];break;
		case 3 :res = teens[3];break;
		case 4 :res = teens[4];break;
		case 5 :res = teens[5];break;
		case 6 :res = teens[6];break;
		case 7 :res = teens[7];break;
		case 8 :res = teens[8];break;
		case 9 :res = teens[9];break;
	}
	return res;
}
// Execution
console.log(numberToPhrase(number));
