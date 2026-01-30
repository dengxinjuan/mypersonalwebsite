(function($){
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Mobile Menu 
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('active');
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 73;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });
    
    
    
    // Parallaxmouse js
    
    function parallaxMouse() {
        if ($('#parallax').length) {
            var scene = document.getElementById('parallax');
            var parallax = new Parallax(scene);
        };
    };
    parallaxMouse();
    
    
    //===== Progress Bar
    
    if($('.progress-line').length){
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width',percent+'%');
        },{accY: 0});
    }
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 1600,
    });
    
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    

    
    //===== Smooth Scroll Animations
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    $('.single-service, .single-work, .about-content, .section-title').each(function() {
        observer.observe(this);
    });

    //===== Enhanced Button Interactions
    $('.main-btn').on('mouseenter', function() {
        $(this).addClass('btn-hover');
    }).on('mouseleave', function() {
        $(this).removeClass('btn-hover');
    });

    //===== Smooth Page Load Animation
    $(window).on('load', function() {
        $('body').addClass('page-loaded');
        
        // Stagger animation for hero elements
        setTimeout(() => {
            $('.header-content-right .sub-title').addClass('animate-in');
        }, 200);
        
        setTimeout(() => {
            $('.header-content-right .title').addClass('animate-in');
        }, 400);
        
        setTimeout(() => {
            $('.header-content-right p').addClass('animate-in');
        }, 600);
        
        setTimeout(() => {
            $('.header-content-right .main-btn').addClass('animate-in');
        }, 800);
        
        setTimeout(() => {
            $('.header-image').addClass('animate-in');
        }, 1000);
    });

    //===== Enhanced Parallax Effect
    $(window).on('scroll', function() {
        const scrolled = $(this).scrollTop();
        const parallaxElements = $('.header-shape');
        
        parallaxElements.each(function() {
            const speed = $(this).data('depth') || 0.5;
            const yPos = -(scrolled * speed);
            $(this).css('transform', `translateY(${yPos}px)`);
        });
    });

    //===== Skill Icons Hover Animation
    $('.skill-bar code').on('mouseenter', function() {
        $(this).find('img').css('transform', 'scale(1.1) rotate(5deg)');
    }).on('mouseleave', function() {
        $(this).find('img').css('transform', 'scale(1) rotate(0deg)');
    });

    //===== Contact Form Enhancement
    $('.single-form input, .single-form textarea').on('focus', function() {
        $(this).parent().addClass('form-focused');
    }).on('blur', function() {
        if (!$(this).val()) {
            $(this).parent().removeClass('form-focused');
        }
    });

    //===== Social Icons Animation
    $('.header-social-icon a, .footer-content a').on('mouseenter', function() {
        $(this).css('transform', 'translateY(-3px) scale(1.1)');
    }).on('mouseleave', function() {
        $(this).css('transform', 'translateY(0) scale(1)');
    });
    
}(jQuery));