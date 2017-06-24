$(function(){
    console.log("Working");
    $( ".image1" ).click(function() {
  $(".modal , .pop1, .popup").css({"display" : "block"});
});
    $( ".image2" ).click(function() {
  $(".modal , .pop2, .popup").css({"display" : "block"});
});
    $( ".image3" ).click(function() {
  $(".modal , .pop3, .popup").css({"display" : "block"});
});
    $( ".modal" ).click(function() {
    location.reload();
});

});
