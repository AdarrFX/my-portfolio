$(document).ready(function (){

    main();

});

const main = function () {

    console.log("Hello!");
    $(window).scroll(updateNav);

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