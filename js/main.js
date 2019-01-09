function displayFirst(){
	var inputVal = document.getElementById("input").value;

	if(isNaN(inputVal)){
		document.getElementById("error").innerHTML = "You can only put in numbers"
		document.getElementById("input").value = ""
		console.log("hi");
	} else {
		document.getElementById("first").innerHTML = inputVal;

	}
}
var cool = setInterval(displayFirst,100);
