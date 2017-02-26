// 1 
// I created a function called stringy and gave it an argument of length
function stringy(length){ 
// defined a variable to str and set it ot a value of an empty string
var str = "";

// the integer will start at 1 with the length being less than or equal to the value then add by one
for(i = 1; i <= length; i++){

	if(i % 2 == 0) {
		str += 0;
	} else {
		str += 1;
	}
}
}
// 2 
// Given a non-negative integer, return an array containing a list of independent digits in reverse order.
function reversal(numb){

	var str = numb.toString();

	var arr = str.split("");

	var spl = arr.reverse();

	for (i = 0; i < spl.legth; i++) {
		var integr = parseInt(spl[i]);
		arrayInt.push(integr);
	}

	console.log(arrayInt);

}

// 3 fibonacci number


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
	var expirationDate = "June 15, 2014"
	var currentDate = "January 30, 2017"
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate);
}