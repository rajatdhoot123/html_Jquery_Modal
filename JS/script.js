$(function(){
    console.log("Working");
    $( ".img-responsive" ).click(function() {
  $(".modal , .pop").css({"display" : "block"});
});
    $( ".modal" ).click(function() {
    location.reload();
});

});
