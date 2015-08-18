



jQuery(document).ready(function($){


  ////////////////////////////////// Waypoints NAVBAR SCROLL DOWN OPACITY

  $('#meWell').waypoint(function(direction){ //when Home area is in focus
    //console.log("Hello");
    if(direction === 'down'){
      $('.navbar.navbar-default.navbar-fixed-top.animated.bounce').addClass('fiftypacity');
      console.log("Waypoints navbar 50% opacity triggered.");
    }
    if(direction === 'up'){
      $('.navbar.navbar-default.navbar-fixed-top.animated.bounce').removeClass('fiftypacity');
      console.log("Waypoints navbar 50% opacity triggered.");
    }

  },{offset:'10%'});

////////////////////////////////// Waypoints  SCROLL PIC INTRO

  $('#meWell').waypoint(function(direction){
    //console.log("Hello");
    if(direction === 'down'){
      $('#avatar').addClass('zero-opacity');
    }
  },{offset:'50%'});

///////////////////////////////// Waypoints SERVIVES OPACITY

  $('#services').waypoint(function(direction){ //select services
    if(direction === 'down'){
      $('.panel.panel-default').toggleClass('well-zero'); //add %100 opacity when down
      console.log("Waypoints touching Services");
    }
    if(direction === 'up'){ // go back to %0 opacity when up
      $('.panel.panel-default').toggleClass('well-zero');
    }
  },{offset:'25%'});


  ///////////////////////////////////Waypoints Photography Opacity

  $('#photography').waypoint(function(direction){ //select services
    if(direction === 'down'){
      $('.photocontainer.well-zero').toggleClass('well-zero'); //add %100 opacity when down
      console.log("Waypoints touching Photography");
    }
    if(direction === 'up'){ // go back to %0 opacity when up
      $('.photocontainer').toggleClass('well-zero');
    }
  },{offset:'50%'});

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

  //SCROLL TO PHOTOGRAPHY: SET TO ACTIVE
 
  $('#photography').waypoint(function(direction){

    if(direction === "down"){
      $("#reachme-li, #services-li, #work-li, #home-li").removeClass("active");
      $("#photography-li").addClass("active");
    }
    if(direction === "up"){
      $("#reachme-li, #services-li, #work-li, #home-li").removeClass("active");
      $("#photography-li").addClass("active");
    }
  },{offset:'40%'});
  //SCROLL TO HOME: SET TO ACTIVE
 
  $('#home').waypoint(function(direction){

    if(direction === "down"){
      $("#reachme-li, #services-li, #work-li, #photography-li").removeClass("active");
      $("#home-li").addClass("active");
    }
    if(direction === "up"){
      $("#reachme-li, #services-li, #work-li, #photography-li").removeClass("active");
      $("#home-li").addClass("active");
    }
  },{offset:'0%'});
  //SCROLL TO SERVICES: SET TO ACTIVE
 
  $('#services').waypoint(function(direction){

    if(direction === "down"){
      $("#reachme-li, #home-li, #work-li, #photography-li").removeClass("active");
      $("#services-li").addClass("active");
    }
    if(direction === "up"){
      $("#reachme-li, #home-li, #work-li, #photography-li").removeClass("active");
      $("#services-li").addClass("active");
    }
  },{offset:'18%'});
  //SCROLL TO WORK: SET TO ACTIVE
 
  $('#work').waypoint(function(direction){

    if(direction === "down"){
      $("#reachme-li, #home-li, #services-li, #photography-li").removeClass("active");
      $("#work-li").addClass("active");
    }
    if(direction === "up"){
      $("#reachme-li, #home-li, #services-li, #photography-li").removeClass("active");
      $("#work-li").addClass("active");
    }
  },{offset:'30%'});

 


}); // End of Jquery closure









