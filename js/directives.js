'use strict';

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
        }
    });