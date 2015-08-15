



jQuery(document).ready(function($){

//CLICK SERVICES :SET TO ACTIVE

  $("#services-li").click(function(){
    $("#home-li, #work-li, #reachme-li, #photography-li").removeClass("active");
    $("#services-li").addClass("active");
  });



//CLICK WORK :SET TO ACTIVE

  $("#work-li").click(function(){
    $("#home-li, #services-li, #reachme-li, #photography-li").removeClass("active");
    $("#work-li").addClass("active");
  });



//CLICK REACH ME :SET TO ACTIVE

  $("#reachme-li").click(function(){
    $("#home-li, #services-li, #work-li,#photography-li").removeClass("active");
    $("#reachme-li").addClass("active");
  });

//CLICK HOME:SET TO ACTIVE

  $("#home-li").click(function(){
    $("#reachme-li, #services-li, #work-li, #photography-li").removeClass("active");
    $("#home-li").addClass("active");
  });

//CLICK PHOTOGRAPHY :SET TO ACTIVE

  $("#photography-li").click(function(){
    $("#reachme-li, #services-li, #work-li, #home-li").removeClass("active");
    $("#photography-li").addClass("active");
  });


//HOVER ON GIF

  $('.bg').hover(function(){
    $(this).attr("src", "../images/Intro_2k.gif");
    console.log("GIF Hover");
  },
  function(){
    $(this).attr("src", "../images/Intro_2k.gif");
  });



//SCROLL TO SERVICES: SET TO ACTIVE

  $('#photography-li').waypoint(function(event, direction){

    if(direction === "down"){
      $("#reachme-li, #services-li, #work-li, #home-li").removeClass("active");
      $("#photography-li").addClass("active");
    }
    else{
      $("#reachme-li, #services-li, #work-li, #home-li").removeClass("active");
      $("#photography-li").addClass("active");
    }
  });



//Play Gif on Hovers

$(function(){
    $('#bg').on( 'mouseenter', function() {
         $(this).toggleClass('animated', 'static');
    })
})



});





