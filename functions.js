

var contenador = document.getElementById("container");
var planeta = document.getElementById("planets");
var deathEstrella = document.getElementById("deathStar");
var salud = document.getElementById("health");
var punto = document.getElementById("points");



$("#container").hide(); 
$(".overlay").click(function(){
	$("#container").fadeToggle("slow");
});




$("#planets").on("click", function () {
	//When clicked on planets 
	//1. make a click function on planet
	$("#planets").toggleClass("replacePlanets");
	
		//1.1 make planet disapear
	//2.then make 'points ' show up/replace


	/*make other planets reapear once this planet disappears
		//have planet *slide* in once the other planet is gone
 	*/
	console.log("planets")
});


var deathEstrella = function () {
	//have image fade little by three phases
	//1.make image fade 2/3 health
	//2.make image opacity fade more at amost 1/3 health

		/*shot green array on planet when click on planet 
			//add sounds when button is click 
		*/
	console.log()
}

var punto = function() {
	//math.random will be points on planets range from 0 - 100
	
	//1.make number go on score board 
		//added current score onto the past schore numbers

	//3.replace planet clicked on with the score that has been given 
		//if *bad # * make color of font red  

	

}

var salud = function () {
	//1.if '0' 
		//health will go down by 10%

		/*if number from the movies make *critical hit* 
		 which brings health down to 30% */

	//2. change color of bar 2/3
	//3.change color in 1/3

}















