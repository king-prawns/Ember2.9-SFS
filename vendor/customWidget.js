/* global define */
(function (define) {
    define([], function () { 
        //['jquery'], function ($)
        return (function () {
            var myVar = '';

            var extWidget = {
                fullName: fullName
            };

            return extWidget;

            ////////////////

            function fullName(firstName, lastName) {
                return alert(firstName+ " " + lastName + "!");
            }

        })();
    });
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory();
        //= factory(require('jquery'));
    } else {
        window.customWidget = factory(window);
        //= factory(window.jQuery);
    }
}));