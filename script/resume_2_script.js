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



$(init);

function init () {
	$("#description_container").load("../skillzFiles/bilingual.html");
}

