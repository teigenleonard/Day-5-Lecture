$(document).ready(function(){
  appendDOM();
  addEventListeners();
});

function appendDOM(){
  $(".container").append("<div class='box'></div>");
}

function addEventListeners(){
  $(".container").on("mouseover" , ".box" , function(){
    $(this).addClass("highlight");
  });

  $(".container").on("mouseout" , ".box" , function(){
    $(this).removeClass("highlight");
  });
}
