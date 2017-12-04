function temperature(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var temp = temperature (-5,25);
if ( temp <= 10) {
	console.log("The weather is cold");
} else {
	console.log("The weather is moderate");
}