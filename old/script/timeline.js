// var addText = document.getElementById('overlay');// var $addText = $('#lifeEvents ul'); 

var lifeEvents = {

tuscany:"My first Job. I grew up at the Tuscany Tavern. I moved up from bus boy to barender in the front of the house and from dishwasher to running the kitchen a few nights a week in the back of the house. There was no position I did not hold at this restaurant. I learned about work ethic and what it means to do a quality job here. I also grew up socially and gained many perspectives that were vastly different from my own. I moved on from the Tuscany Tavern after having worked there for 8 years to essentially 'leave the nest'.",
 keg: "I first worked at the Keg as a bar back, winning an award for 'Best Bar Back 2007'. I eventually moved up to a bartender for a short period and spent the majority of my time as a server. I also trained new staff and helped with the formation of a charity group within the restaurant. I learned a lot about myself and customer service with this experience, especially about sales. I quit when I graduated college because I was about to begin teaching.",
 metro: "I graduated from Metro State University of Denver in May of 2012. I achieved a 3.77 GPA with a degree in Spanish and a teaching certificate for K-12 education. This is particularly impressive because I did not graduate high school and am the first in my family to graduate college. I particularly enjoyed classes in the humanities and was pleasantly surprised by a sparked interest in math and science.",
natasha: "This is when I met my hot wife. She is what drives me and what grounds me.",
 dob: "I was born in Wheat Ridge, Colorado",
 jefferson: "I was a tutor for the AVID tutoring program. In this position I helped students with their homework, not through giving them the answer, but rather through an inquiry process modelled after the Socratic Method. I learned the importance of developing meaningful relationships with students and colleagues as well as that guiding people to the answer is much more powerful than giving them the answer.",
manual:"I taught Spanish as a Foreign language, Spanish Heritage and ESL. I created my own curriculum for each of these sections and developed my own standards based assessments. I was also the Technology and Google Champion, teaching with 1:1 devices in my classroom, and also hosted professional development sessions that tutored teachers on how to use technology in the classroom. In addition to my work as a teacher, I participated in several optional professional development opportunities and commitees. I gained many skills and insights from this position that have greatly influenced my abilities and ambitions."
};
// $("#dob").click(function(event){
// 	$("#overlay").show();
// 	return overlay.textContent = dob;
// });

// $("#tuscany").click(function(event){
// 	$("#overlay").show();
// 	return overlay.textContent = tuscany;
// });

// $("#keg").click(function(event){
// 	$("#overlay").show();
// 	return overlay.textContent = keg;
// });

// $("#metro").click(function(event){
// 	$("#overlay").show();
// 	return overlay.textContent = metro;
// });

// $("#natasha").click(function(event){
// 	$("#overlay").show();
// 	return overlay.textContent = natasha;
// });

// $("#jefferson").click(function(event){
// 	$("#overlay").show();
// 	return overlay.textContent = jefferson;
// });

// $("#manual").click(function(event){
// 	$("#overlay").show();
// 	return overlay.textContent = manual;
// });


$("#overlay").click(function(){
	$("#overlay").hide();
});



//I want this to work without me having to use a switch statement, retrieving the value on click 

// $('#lifeEvents').on('click', 'lifeEvents.li', function (event) {
// 	var key = $(event.target)[0].id;
// 	var content = $(this).value();
	
		
// 	}

// 	$("#overlay").show();
//  	return overlay.textContent = content;
// 	console.log(content);
// })




// The one below works

$('#lifeEvents').on('click', function (event) {
	var key = $(event.target)[0].id;
	var content;
	switch(key) {
		case "tuscany":
		content = lifeEvents.tuscany;
		break;
		case "keg":
		content = lifeEvents.keg;
		break;
		case "jefferson":
		content = lifeEvents.jefferson;
		break;
		case "manual":
		content = lifeEvents.manual;
		break;
		case "metro":
		content = lifeEvents.metro;
		break;
		case "dob":
		content = lifeEvents.dob;
		break;
		case "natasha":
		content = lifeEvents.natasha;
		break;
		
	}

	$("#overlay").show();
 	return overlay.textContent = content;
	console.log(content);
})


/*************************************************************
		Trying with AJAX 
*************************************************************/


// var $overlay = $("#overlay");
// 		// // var $description = $("#lifeEvents ul ");

// 		// // $overlay.append($description);

// 		//$("#overlay").append($overlay);


// var loadExperience = function(experience) {
// $.ajax({
//   url: experience;
//   success: function(anything){
//  	$("#lifeEvents a").html(anything);
//   }
// })};

// 		// $('#badge_container').on('click','button.skillz_badge',function(){
// 		// 	loadSkillz($(this).attr('name'));
// 		// });


// $("#lifeEvents a").click(function(event){
// 	event.preventDefault();
// 	loadExperience($(this).attr('href'));
// 			// // // var descriptionLocation = $(this).attr("href");
// 	$overlay.append(loadExperience);
// 	$overlay.show(); 
	
// });

// $($overlay).click(function(){
// 	$overlay.hide();
// });




