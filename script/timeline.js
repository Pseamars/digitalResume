// var addText = document.getElementById('overlay');// var $addText = $('#lifeEvents ul'); 


var tuscany = "My first Job"; 
var keg = "I worked here for a little while";
var metro = "Where I went to college";
var natasha = "When I met my hot wife";
var dob = "I was born";
var jefferson = "I was a tutor";
var manual = "I witnessed the horrors of teaching";

$("#dob").click(function(event){
	$("#overlay").show();
	return overlay.textContent = dob;
});

$("#tuscany").click(function(event){
	$("#overlay").show();
	return overlay.textContent = tuscany;
});

$("#keg").click(function(event){
	$("#overlay").show();
	return overlay.textContent = keg;
});

$("#metro").click(function(event){
	$("#overlay").show();
	return overlay.textContent = metro;
});

$("#natasha").click(function(event){
	$("#overlay").show();
	return overlay.textContent = natasha;
});

$("#jefferson").click(function(event){
	$("#overlay").show();
	return overlay.textContent = jefferson;
});

$("#manual").click(function(event){
	$("#overlay").show();
	return overlay.textContent = manual;
});


$("#overlay").click(function(){
	$("#overlay").hide();
});





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




