console.log("array-methods.js")

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(function(planetsList){
	el.innerHTML += " " + planetsList;
});

// Use the map method to create a new array where the first letter of each planet is capitalized

var capPlanetDiv = document.getElementById("capital-planets");

capPlanets = planets.map(function(capital){
	return capital.charAt(0).toUpperCase() + capital.slice(1);
});

	capPlanetDiv.innerHTML = capPlanets;
	console.log("capitalized", capPlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'

var filPlanetDiv = document.getElementById("filtered-planets");

filPlanets =  planets.filter(function(filtered){
	for (var i = 0; i < filtered.length; i++) {
		if(filtered.charAt(i).toUpperCase() === "E"){
			return filtered;
		}
	}
});

	filPlanetDiv.innerHTML = filPlanets;
	console.log("filtered", filPlanets);


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var wordDiv = document.getElementById("word-div");

words.forEach(function(sentence){
	wordDiv.innerHTML += " " + sentence
});