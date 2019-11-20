$(document).ready(function(){
 // put your code here4

  // all the panels vanished

 $(".theButton").click(function(){
  $("#panel .container").siblings().hide();
   })
   // just one vanished

  $(".theButton").click(function(){
  $(this).hide(".container");
   }) 

// Everthing fades 

  $(".theButton").click(function(){
  $("#panel .container").siblings().fadeTo( 1000, .5 );
   })
 // Reset Panel

 $(".superButton").click(function(){
  $(".container").siblings().fadeTo( 100, 1 );
   }) 

// Mouse hover functions

$(".theButton").mouseenter(function(){
	$(this).addClass("makeBlack");
   });

 //returns to original colour on mouseout 
$(".theButton").mouseout(function(){
	$(this).removeClass("makeBlack");
   });

});