function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;		
	getProtein(runningTotal,text1);
};

function getProtein(runningTotal,text1) {
	var proteinTotal = 0;
	var selectedProtein = [];
	var proteinArray = document.getElementsByClassName("protein");
	for (var j = 0; j < proteinArray.length; j++) {
		if (proteinArray[j].checked) {
			selectedProtein.push(proteinArray[j].value);
			/*console.log("selected protein item: ("+selectedProtein+")");*/
			console.log("selected protein item: ("+proteinArray[j].value+")");
			text1 = text1+proteinArray[j].value+"<br>";
		}
	}
	var proteinCount = selectedProtein.length;
	if (proteinCount > 1) {
		proteinTotal = (proteinCount - 1);
	} else {
		proteinTotal = 0;
	}
	runningTotal = (runningTotal + proteinTotal);
	console.log("total selected protein items: "+proteinCount);
	console.log(proteinCount+" protein - 1 free protein = "+"$"+proteinTotal+".00");
	console.log("protein text1: "+text1);
	getCheese(runningTotal,text1);
};

function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
		for (var k = 0; k < cheeseArray.length; k++) {
		if (cheeseArray[k].checked) {
			var selectedCheese = cheeseArray[k].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
	var extraCheese = 3;
	if (selectedCheese === "Extra Cheese") {
		cheeseTotal = extraCheese;
	} else {
		cheeseTotal = 0;
	}
	runningTotal = (runningTotal + cheeseTotal);
	console.log("cheese text1: "+text1);
	getCrust(runningTotal, text1);
};

function getCrust(runningTotal, text1) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
		for (var m = 0; m < crustArray.length; m++) {
		if (crustArray[m].checked) {
			var selectedCrust = crustArray[m].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	var stuffedCrust = 3;
	if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = stuffedCrust;
	} else {
		crustTotal = 0;
	}
	runningTotal = (runningTotal + crustTotal);
	console.log("crust text1: "+text1);
	console.log("Purchace total: $" +runningTotal+".00");
	getSauce(runningTotal,text1);
};

function getSauce(runningTotal,text1) {
	var sauceTotal = 0;
	var sauceArray = document.getElementsByClassName("sauce");
		for (var n = 0; n < sauceArray.length; n++) {
		if	(sauceArray[n].checked) {
			var selectedSauce = sauceArray[n].value;
			text1 = text1+selectedSauce+"<br>";
		}
	}
	runningTotal = (runningTotal + sauceTotal);
	console.log("sauce text1: "+text1);
	console.log("Purchace total: $" +runningTotal+".00");
	getVeggies(runningTotal,text1);
};

function getVeggies(runningTotal,text1) {
	var veggiesTotal = 0;
	var selectedVeggies = [];
	var veggiesArray = document.getElementsByClassName("veggies");
		for (var p = 0; p < veggiesArray.length; p++) {
		if (veggiesArray[p].checked) { 
			selectedVeggies.push(veggiesArray[p].value);
			text1 = text1+veggiesArray[p].value+"<br>";
		}
	}
	var veggiesCount = selectedVeggies.length;
	if (veggiesCount > 1) {
		veggiesTotal = (selectedVeggies.length - 1);
	} else { 
		veggiesTotal = 0;
	}	
	runningTotal = (runningTotal + veggiesTotal);
	console.log("veggies text1: "+text1);
	console.log("purchase total: $" +runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};	