jQuery(document).ready(function(){
    jQuery(window).on("scroll", function(){
        if(jQuery(window).scrollTop()){
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

    jQuery(".taste-ramadan-year .taste-ramadan-btn").click(function(){
        jQuery(".content-main .taste-ramadan-content").removeClass("active");
        var activeTab = jQuery(this).attr("data-tab");
        jQuery("#"+activeTab).addClass("active");
    });
});