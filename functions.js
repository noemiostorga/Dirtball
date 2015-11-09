$(document).ready(function (){

	

var deathStar = function() {

	
	this.health = 100;
	this.planet = planet;
	 //function that'll attack and affect health

}


var planets = function() {
	this.points = points; //function that'll keep on adding points
}


$("#Btn").on("click", function(){;
	$(".overlay").fadeOut(1300, "linear"); //maybe append spaceauido?

})


var total_points = 0;
var planet = $("#planets").on("click", function() {
		//When clicked on planets 
		//1. make a click function on planet
			//1.1 make planet disapear
	
		$("#planets").css("visibility", "hidden");
		/*make other planets reapear once this planet disappears
			//have planet *pop* in once the other planet is gone
	 	*/
		$("#planets").animate({left: Math.ceil(Math.random()+'10px'), top: Math.ceil(Math.random()+'10px') });
		setTimeout(function(){
  		$("#planets").css("visibility", "visible");
		}, 500);

			
		//2.then make 'points ' show up
		 //--replance planets should already have score points
		total_points += punto();
		$("#points").text(total_points);
		
	



		
		$("#status").text("attacked!");
	});



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
			$("#health").css("width", "10%");
			/*if number from the movies make *critical hit* 
			 which brings health down to 30% */



	}

	var left = 2;
	var right = 2;
	var up = 2;
	var down = 2;
	var move = 2;

	$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        $("#deathStar").animate({left: move +'px'});
        move -= move;
        break;

        case 38: // up
      
        lert("right!");
        $("#deathStar").animate({left: right +'px'});
        right += right;

        break;

        case 39: // right
        
        $("#deathStar").animate({left: move +'px'});
        move += move;
        break;

        case 40: // down
        
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

}); //closed doc.ready 







