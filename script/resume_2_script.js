/* Moves profile pic */
$("#profile_pic").css("left", "-700px").animate(
	{left: 0}, 
	2000, 
	"easeOutBounce", 
	function  () {
		console.log("I work!!");	
	});
 
// Hide Header on on scroll down
var didScroll; 
var lastScrollTop = 0; 
var delta = 5; 


var headerHeight = $("header").outerHeight(); 

$(window).scroll(function(event) {
    didScroll = true; 
});

setInterval(function(argument) {
    if(didScroll){
        hasScrolled(); 
        didScroll = false;
    }
}, 250); 


function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > headerHeight){
        // Scroll Down
        $('header').hide("slow"); //hide rather than fadeOut
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').show("slow");
        }
    }
    
    lastScrollTop = st;
}
// Fades goal background
// $("#goalContainer").fadeIn(2000, function(){
// 	console.log("I am done animating")
// });

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