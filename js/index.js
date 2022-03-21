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
    jQuery("#purple").click(function(){
        jQuery("#ramadan-content").text("you have clicked the purple button.. here is its content")
        jQuery("#ramadan-heading").text("TasteRamadan 2017 ")
        jQuery(".taste-ramadan-content").css("background-color", "#bc498f")
        
    });
    jQuery("#blue").click(function(){
        jQuery("#ramadan-content").text("you have clicked the Blue button.. here is its content")
        jQuery("#ramadan-heading").text("TasteRamadan 2018 ")
        jQuery(".taste-ramadan-content").css("background-color", "#718cb5")
        // jQuery(".taste-ramadan-content").before(jQuery(".taste-ramadan-content").css({"background-color":"#718cb5"}));
        
    });
    jQuery("#yellow").click(function(){
        jQuery("#ramadan-content").text("you have clicked the Yellow button.. here is its content")
        jQuery("#ramadan-heading").text("TasteRamadan 2019 ")
        jQuery(".taste-ramadan-content").css("background-color", "#e1a12d")
        // jQuery(".taste-ramadan-content").addClass("yellow-click")
        
    });
    jQuery("#green").click(function(){
        jQuery("#ramadan-content").text("you have clicked the Green button.. here is its content")
        jQuery("#ramadan-heading").text("TasteRamadan 2020 ")
        jQuery(".taste-ramadan-content").css("background-color", "#0f9e8d")
        
    });
});