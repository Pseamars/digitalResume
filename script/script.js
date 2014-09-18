$("#profile_pic").hide().show("slow");

var listElements = document.getElementsByTagName("li");
  var step = (2*Math.PI)/listElements.length;
  var angle=0; 
  var circleCenterX = 100;
  var circleCenterY = 100;
  var radius = 180;
  for(var i = 0; i<listElements.length; i++)
  { 
    var element = listElements[i];
    var left=Math.round(circleCenterX+radius*Math.cos(angle));
    var top=Math.round(circleCenterY+radius*Math.sin(angle));
    element.style.left = left+"px";
    element.style.top = top+"px";
    angle+=step;   
  }