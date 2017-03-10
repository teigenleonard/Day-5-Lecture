$(document).ready(function(){
  appendDOM();
  addEventListeners();
});

function appendDOM(){
  $(".container").append("<div class='box'></div>");

  $(".container").append("<p>first</p>");
  $(".container").append("<p id='second'>Second</p>");
  $(".container").append("<p>third</p>");
  // $("#second").fadeToggle(5000);
    // $("#second").fadeToggle(1000).fadeToggle(10000);
    // $("#second").slidedown(5000); //slide down to reveal so slide down only works on hidden elements
endlessLoop ($("#second"));
endlessLoop (".container").children().first();
endlessLoop (".container>").chilren().last();
}

function endlessLoop(element){
  element.slidToggle(3000, function(){
      endlessLoop(element);
  });
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
    console.log("here!");
  });

  $(".container").on("mouseout" , ".box" , function(){
    $(this).toggleClass("highlight");
  });
}
