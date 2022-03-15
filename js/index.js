jQuery(document).ready(function(){
    jQuery(window).on("scroll", function(){
        if($(window).scrollTop()){
            jQuery('.site-header').addClass('blue');
        }
        else{
            jQuery('.site-header').removeClass('blue');
        }
    });
    jQuery('.hamburger').click(function(){
        jQuery('html, body').toggleClass('open-menu')
        jQuery('.hamburger').toggleClass('open-menu')
        jQuery('.navbar').toggleClass('open-menu')
    });
});