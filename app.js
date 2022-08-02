$(function() {
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");
    });
    
    let slider = $("#rekommendSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
    });


});