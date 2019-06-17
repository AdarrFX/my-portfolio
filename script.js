$(document).ready(function (){

    main();

});

const main = function () {

    console.log("Hello!");

    $(window).scroll(updateNav);

    // Smooth scrolling example from: https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
    
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

}

const updateNav = function() {
    let topScroll = $(document).scrollTop();
    if ($(".about").offset().top <= topScroll) {
        $(".navbar").addClass("navbar-stickied");
        $(".navitem").addClass("navitem-stickied");
    } else if ($(".about").offset().top > topScroll) {
        $(".navbar").removeClass("navbar-stickied");
        $(".navitem").removeClass("navitem-stickied");
    }
}