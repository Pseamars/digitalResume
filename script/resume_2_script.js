/* Hides and shows profile pic */

$("#profile_pic").css("left", "-700px").animate(
	{left: 0}, 
	2000, 
	"easeOutBounce", 
	function  () {
		console.log("I work!!");	
	});


// $('.skillz_badge').hover(function () {
// 	$(this).css(); 
	
// });
 
$("#goalContainer").fadeIn(2000, function(){
	console.log("I am done animating")
});

var loadSkillz = function(skill) {


$.ajax({
  url: "../skillzFiles/"+skill+".html",
  success: function(anything){
 	$("#description_container").html(anything);
  }
});


// $('#description_container > div').hide()
// $('#description_container > div[name=' + skill + ']').show()

}

//Attach events
$('#badge_container').on('click','button.skillz_badge',function(){
	loadSkillz($(this).attr('name'));
});