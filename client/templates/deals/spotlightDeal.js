/**
 * Created by Chris on 21/09/2015.
 */

Template.spotlightDeal.rendered = function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items:10,
        autoWidth:true,
        dots:false
    });
}
