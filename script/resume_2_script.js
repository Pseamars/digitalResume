
// var minutes = setInterval(function  () {
//     var today = new Date();
//     var now = today.getMinutes(); 
//     // return now;
//     },1000);
/* Moves profile pic */
$("#profile_pic").css("left", "-700px").animate(
	{left: 0}, 
	2000, 
	"easeOutBounce", 
	function  () {
		console.log("I work!!");	
	});
 
// Hide Header on on scroll down - https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
var didScroll; 
var lastScrollTop = 0; 
var headerHeight = $("header").outerHeight(); 

$(window).scroll(function(event) {
    didScroll = true; 
});

setInterval(function() {
    if(didScroll){
        hasScrolled(); 
        didScroll = false;
    }
}, 250); 


function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than the headerHeight
    if(Math.abs(lastScrollTop - st) <= headerHeight)
        return;
    
    // If they scrolled down and are past the navbar, hide the header
    // ** This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > headerHeight){
        // Scroll Down
        $('header').add('#footer').hide(600); //hide rather than fadeOut because if fadeOut it takes away the element rather than just hiding it. It made the screen jumpy. The "slow" doesn't work with Safari
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').add('#footer').show(600);
        }
    }
    
    lastScrollTop = st;
    console.log("I'm scrollin'");
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

/*******************************************
Footer
********************************************/
var today = new Date();

//Copyright
var year = today.getFullYear();
var footDate = document.getElementById('copy'); 
footDate.innerHTML = "Copyright &copy " + year;
//Current time

$(document).ready( function() {

  function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridien = "AM"; 
    if(hours > 12){
        meridien = "PM"; 
        hours = hours - 12;
    }
    if(minutes <= 10){
        minutes = "0" + minutes;
    }
    if(hours === 0 ){
        hours = 12;
    }
    // This gets a "handle" to the clock div in our HTML
    var $clockDiv = $("#time");

    // Then we set the text inside the clock div 
    // to the hours, minutes, and seconds of the current time
    $clockDiv.text(hours + ":" + minutes + " "+meridien);

  }

  // This runs the displayTime function the first time
    displayTime();
    setInterval(displayTime, 1000);
});


//Weather


$(function displayWeather($) {
  $.ajax({
  url : "http://api.wunderground.com/api/bdd06975606e33d1/geolookup/conditions/q/IA/Cedar_Rapids.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  return "Current temperature in " + location + " is: " + temp_f;
  var $theWeather = $('#weather');
  $theWeather.text("hi");
  }
  });
});






