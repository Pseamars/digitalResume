/* Moves profile pic */

$("#profile_pic").css("left", "-700px").animate(
	{left: 0}, 
	2000, 
	"easeOutBounce", 
	function  () {
		console.log("I work!!");	
	});
 
 //shows and hides header
 var didScroll; 
 var lastScrollTop = 0;
 var delta = 5;
 var navbarHeight = $("#header div").outerHeight();

 //tell interval fnx know the user has scrolled
 $(window).scroll(function(event) {
 	didScroll = true;
 }); 

 //run hasScrolled()and reset didScroll 
 setInterval(function () {
 	if(didScroll){
 		hasScrolled();
 		didScroll = false;
 	}
 }, 250);

 function hasScrolled () {
 	var st = $(this).scrollTop();
 	if(Math.abs(lastScrollTop - st)<=delta)
 		return;
 	if(st > lastScrollTop && st > navbarHeight){
 		$("#header div").removeClass('nav-down').addClass('nav-up');
 	}else{
 		if(st + $(window).height() < $(document).height()){
 			$('#header div').removeClass('nav-up').addClass('nav-down')
 		}
 	}


 };

// Fades goal background
$("#goalContainer").fadeIn(2000, function(){
	console.log("I am done animating")
});

// Begin Skillz requests
//create AJAX request
var loadSkillz = function(skill) {  //Where does the skill get it's value? I think from the onclick function loadSkills(param=skill)
$.ajax({ 
  url: "../skillzFiles/"+skill+".html",
  success: function(anything){
 	$("#description_container").html(anything);
  }
});
}
//Attach events
$('#badge_container').on('click','button.skillz_badge',function(){
	loadSkillz($(this).attr('name'));
});

// $('#description_container > div').hide()
// $('#description_container > div[name=' + skill + ']').show()