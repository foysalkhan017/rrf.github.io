(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        $(".case-studies-carousel").owlCarousel({
            items:3,
            margin:30,
            loop:true,
            dots:true,
            nav:false,
        });
        $(".case-study-box-style2").owlCarousel({
            items:4,
            margin:30,
            loop:true,
            dots:true,
            nav:false,
        });
        $(".logo-carousel").owlCarousel({
            items:6,
            margin:30,
            loop:true,
            dots:false,
            nav:false,
        });
        $(".testimonial-carousel").owlCarousel({
            items:1,
            loop:true,
            dots:true,
            nav:false,
        });


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	