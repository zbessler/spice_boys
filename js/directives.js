/* Directives */


angular.module('Spice.directives', []).
    directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }])
    .directive('scrollOnClick', function() {
        return {
            restrict: 'A',
            link: function(scope, elm, attrs) {
                elm.on('click', function() {
                    $("body").animate({scrollTop: $(attrs.href).offset().top-100}, "slow");
                });
            }
        };
    }).directive('header', function() {
        return {
            restrict: 'A',
            link: function(scope, elm, attrs) {
                $(window).on('scroll', function() {
                    var y = $(window).scrollTop();
                    if(y > 550){
                        elm.addClass('header2');
                    }else {
                        elm.removeClass('header2');    
                    }
                });
            }
        };
    }).directive('slideIn', function() {
        return {
            restrict: 'A',
            link: function(scope, elm, attrs) {
                $(window).on('scroll', function() {
                    var y = $(window).scrollTop();
                    if(y > $(elm).offset().top-500){
                        elm.css(attrs.slideIn, '0px');
                        elm.css('opacity', '1');
                    }else {
                        elm.css(attrs.slideIn, '300px');
                        elm.css('opacity', '0');
                    }
                });
            }
        };
    }).directive('slideUp', function() {
        return {
            restrict: 'A',
            link: function(scope, elm, attrs) {
                $(window).on('scroll', function() {
                    var y = $(window).scrollTop();
                    if(y > 80){
                        elm.css('bottom', '100px');
                        elm.css('opacity', '0');
                    }else {
                        elm.css('bottom', '0px');
                        elm.css('opacity', '1');
                    }
                });
            }
        };
    });
