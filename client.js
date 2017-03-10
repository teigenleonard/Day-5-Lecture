$(document).ready(function(){
  appendDOM();
  addEventListeners();
});

function appendDOM(){
  $(".container").append("<div class='box'></div>");

  $("container").append("<p>first</p>");
  $("container").append("<p id='second'>Second</p>");
  $("container").append("<p>third</p>");
  $("#second").fadeToggle(5000);
}

function addEventListeners(){
  // $(".container").on("mouseover" , ".box" , function(){
  //   $(this).addClass("highlight");
  // });
  //
  // $(".container").on("mouseout" , ".box" , function(){
  //   $(this).removeClass("highlight");
  // });
  $(".container").on("mouseover" , ".box" , function(){
    $(this).toggleClass("highlight");
  });

  $(".container").on("mouseout" , ".box" , function(){
    $(this).toggleClass("highlight");
  });
}
