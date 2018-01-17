$( document ).ready(function() {
    /* Open lateral menu */
    $('#button-toggle-menu-open').click(function() {
        $('#container-sections-updates').css({
            opacity: 1,
            width: '90%',
            WebkitTransition : 'all 0.5s ease-in-out',
            MozTransition    : 'all 0.5s ease-in-out',
            MsTransition     : 'all 0.5s ease-in-out',
            OTransition      : 'all 0.5s ease-in-out',
            transition       : 'all 0.5s ease-in-out'
        });
        $('#button-toggle-menu-open').css({display: "none"});
        $('#button-toggle-menu-close').css({display: "block"});
    });
    /* Close lateral menu */
    $('#button-toggle-menu-close').click(function() {
        $('#container-sections-updates').css({
            opacity: 0,
            width: '0px',
            WebkitTransition : 'all 0.5s linear',
            MozTransition    : 'all 0.5s linear',
            MsTransition     : 'all 0.5s linear',
            OTransition      : 'all 0.5s linear',
            transition       : 'all 0.5s linear'
        });
        $('#button-toggle-menu-open').css({display: "block"});
        $('#button-toggle-menu-close').css({display: "none"});
    });
});