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
            width: '0px',
            WebkitTransition : 'all 0.3s linear',
            MozTransition    : 'all 0.3s linear',
            MsTransition     : 'all 0.3s linear',
            OTransition      : 'all 0.3s linear',
            transition       : 'all 0.3s linear'
        });
        $('#button-toggle-menu-open').css({display: "block"});
        $('#button-toggle-menu-close').css({display: "none"});
    });
    /* Open course events content */
    $('#button-toggle-coursecontent-open').click(function() {
        $('#unit-content-left').css({
            opacity: 1,
            width: '25%',
            height: '100%',
            WebkitTransition : 'all 0.5s ease-in-out',
            MozTransition    : 'all 0.5s ease-in-out',
            MsTransition     : 'all 0.5s ease-in-out',
            OTransition      : 'all 0.5s ease-in-out',
            transition       : 'all 0.5s ease-in-out'
        });
        $('#unit-content-full').css({
            width: '75%',
            // WebkitTransition : 'all 0.5s ease-in-out',
            // MozTransition    : 'all 0.5s ease-in-out',
            // MsTransition     : 'all 0.5s ease-in-out',
            // OTransition      : 'all 0.5s ease-in-out',
            // transition       : 'all 0.5s ease-in-out'
        });
        $('#button-toggle-coursecontent-open').css({display: "none"});
        $('#button-toggle-coursecontent-close').css({display: "block"});
    });
    /* Close course events content*/
    $('#button-toggle-coursecontent-close').click(function() {
        $('#unit-content-left').css({
            width: '0px',
            height: '0px',
            WebkitTransition : 'all 0.3s linear',
            MozTransition    : 'all 0.3s linear',
            MsTransition     : 'all 0.3s linear',
            OTransition      : 'all 0.3s linear',
            transition       : 'all 0.3s linear'
        });
        $('#unit-content-full').css({
            width: '100%',
            WebkitTransition : 'all 0.5s ease-in-out',
            MozTransition    : 'all 0.5s ease-in-out',
            MsTransition     : 'all 0.5s ease-in-out',
            OTransition      : 'all 0.5s ease-in-out',
            transition       : 'all 0.5s ease-in-out'
        });
        $('#button-toggle-coursecontent-open').css({display: "block"});
        $('#button-toggle-coursecontent-close').css({display: "none"});
    });
});