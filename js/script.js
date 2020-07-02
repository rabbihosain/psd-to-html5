
jQuery(document).ready(function(){

    jQuery('.toggelmlenu').click(function(){
        jQuery('.main-menu').slideToggle();
    })




    jQuery(window).on('scroll',function(){
        var scrollTop = jQuery(window).scrollTop();

        if(scrollTop >= 50){
            jQuery('.header-area').addClass('fixed');
        }
        else{
            jQuery('.header-area').removeClass('fixed');
        }
    })


    jQuery('.works').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
      
    })

    // Flex Slider 
    // Can also be used with $(document).ready()
    $(window).load(function() {
        $('.flexslider').flexslider({
        animation: "slide",
        directionNav:false,
        });
    });

    // Pge Scroll 
    var section = jQuery('section');
    nav = jQuery('nav[role="navigation"]');

    jQuery(window).on('scroll',function(){
        var curPos= jQuery(this).scrollTop();
        section.each(function(){
            var top=jQuery(this).offset().top - 66;
            bottom =top + jQuery(this).outerHeight();
            if(curPos >= top && curPos <= bottom){
                nav.find('a').removeClass('active');
                nav.find('a[href="#'+jQuery(this).attr('id')+'"]').addClass('active');
            }
        })
    });

    nav.find('a').on('click',function(){
        var $el = jQuery(this)
        id = $el.attr('href');
        jQuery('html,body').animate({
            scrollTop: jQuery(id).offset().top-65
        },500);
        return false;
    });
    
    jQuery(window).on('scroll',function(){
        var utd=jQuery(this).scrollTop();

        if(utd >= 200){
            jQuery('.scrollTop').fadeIn();
        }
        else{
            jQuery('.scrollTop').fadeOut();
        }
    })

    jQuery('.scrollTop').click(function(){
        jQuery('html,body').animate({
            scrollTop:0
        })
    })
    




})