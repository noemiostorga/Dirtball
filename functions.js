$(document).ready(function (){



$("#Btn").on("click", function(){;
	$(".overlay").fadeOut(1300, "linear"); //maybe append spaceauido?
})


var deathStar = function() {
	this.punto = points; //function that'll keep on adding points
	this.salud = 100;
	this.planet = planet;
	this.attack = function (opponent) {
	    var hitChance = Math.random();
	    if (hitChance > .6) {
	      planet.health -= 10;
	    } else {
	      console.log(" missed!!!!");
	    }
	  };
	  this.criticalHit = function (opponent) {
	    opponent.health -= this.randomCrit();
	  };
	  this.randomCrit = function () {
	    var max = 20;
	    var min = 11;

	    return Math.floor(Math.random() * (max - min) + min);
	  }; //function that'll attack and affect health

}







	$("#planets").on("click", function attack() {
		//When clicked on planets 
		//1. make a click function on planet
			//1.1 make planet disapear
		$("#planets").remove();
		$("#points").text(punto);
	
			
		//2.then make 'points ' show up/replace
		 //--replance planets should already have score points


		/*make other planets reapear once this planet disappears
			//have planet *slide* in once the other planet is gone
	 	*/
		console.log("You've attack!");
	});





	var deathStar = function () {
		//have image fade little by three phases
		//1.make image fade 2/3 health
		//2.make image opacity fade more at amost 1/3 health

			/*shot green array on planet when click on planet 
				//add sounds when button is click 
			*/
		
	}

	var punto = function() {
		//math.random will be points on planets range from 0 - 100
		return Math.ceil((Math.random() * (10 - 0) + 0));
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






}); //closed doc.ready 







