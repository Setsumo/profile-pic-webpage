

$(document).ready(function() {
    // Example 1: jQuery Selectors
    $(".highlight").click(function() {
      $(this).css("background-color", "red");
      $(this).css("color", "white");
    });
  
    // Example 2: Modify Content and Attributes Example 
    $("#change-text-btn").click(function() {
      $("#text-target").text("The text has been changed with jQuery!");
    });
  
    // Example 3: Apply and Remove CSS Styles Example
    $("#style-toggle-btn").click(function() {
      $(".box").addClass("highlight-box");
    });
  
    // Event Listeners Example
    $("#name-input").on("input", function() {
      let name = $(this).val();
      $("#name-output").text("Hello, " + name + "!");
    });
  
    // jQuery Effects Example
    $("#toggle-para-btn").click(function() {
      $(".effect-para").fadeIn();
    });
  
    // Custom Animations Example
    $("#animate-box-btn").click(function() {
      $(".anim-box").animate({
        width: "100px",
        height: "100px",
        opacity: 0.5
      }, 1000).animate({
        width: "50px",
        height: "50px",
        opacity: 1
      }, 1000);
    });
  });
  