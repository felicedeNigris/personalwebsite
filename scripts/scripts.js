//CLICK SERVICES :SET TO ACTIVE
$(function(){ 
  $("#services-li").click(function(){
    $("#home-li, #work-li, #reachme-li, #photography-li").removeClass("active");
    $("#services-li").addClass("active");
  });
});


//CLICK WORK :SET TO ACTIVE
$(function(){ 
  $("#work-li").click(function(){
    $("#home-li, #services-li, #reachme-li, #photography-li").removeClass("active");
    $("#work-li").addClass("active");
  });
});


//CLICK REACH ME :SET TO ACTIVE
$(function(){ 
  $("#reachme-li").click(function(){
    $("#home-li, #services-li, #work-li,#photography-li").removeClass("active");
    $("#reachme-li").addClass("active");
  });
});

$(function(){ 
  $("#home-li").click(function(){
    $("#reachme-li, #services-li, #work-li, #photography-li").removeClass("active");
    $("#home-li").addClass("active");
  });
});

$(function(){ 
  $("#photography-li").click(function(){
    $("#reachme-li, #services-li, #work-li, #home-li").removeClass("active");
    $("#photography-li").addClass("active");
  });
});


$(function(){
  $('.bg').hover(function(){
    $(this).attr("src", "../images/Intro_2k.gif");
    console.log("GIF Hover");
  },
  function(){
    $(this).attr("src", "../images/Intro_2k.gif");
  });
});


//SCROLL TO SERVICES: SET TO ACTIVE

/*$('photography-li').waypoints('sticky',{
  direction:'up',
  handler: function(direction) {
    console.log('Scrolled to waypoint!');
  }
});*/