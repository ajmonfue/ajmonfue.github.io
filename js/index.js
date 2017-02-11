var mobile_nav = {
    is_open: false,
    icon: $('.mobile-nav-toggle'),
    links: $('div.mobile-nav'),
    header: $('nav.fixed'),
    toggleOpen: function(e) {
        e.stopPropagation();
        if(this.is_open) {
            this.hide();
        }else {
            this.show();
        }

    },
    hide: function(){
        this.icon.removeClass('is-open');
        this.links.removeClass('is-open');
        this.header.removeClass('is-open');
        this.is_open = false;
    },
    show: function(){
        this.icon.addClass('is-open');
        this.links.addClass('is-open');
        this.header.addClass('is-open');
        this.is_open = true;
    }
}

mobile_nav.icon.on('click', function(e){
    mobile_nav.toggleOpen(e);
});

$(".mobile-nav a[data-section='about-me']").on('click', function(){
    $('html, body').animate({scrollTop: $('#about-me .greet').offset().top-50 }, 1000);
    mobile_nav.hide()
});

$(".mobile-nav a[data-section='proyects']").on('click', function(){
    $('html, body').animate({scrollTop: $('#projects').offset().top-50 }, 1000);
    mobile_nav.hide()
});
$(".mobile-nav a[data-section='contact']").on('click', function(){
    $('html, body').animate({scrollTop: $('#contact').offset().top-50 }, 1000);
    mobile_nav.hide()
});
/*$(window).on('click scroll',function(){
    if(mobile_nav.is_open){
        mobile_nav.hide();
    }
});*/
