;(function() {
    'use strict';
    angular.module('test').filter('phone', function () {
        return function (tel) {
            if (!tel) { return ''; }

            var value = tel.toString().trim().replace(/^\+/, '');

            if (value.match(/[^0-9]/)) {
                return tel;
            }

            var country, city, number;

            switch (value.length) {
                case 11: // ddd+numero ex: 21981899735
                    city = value.slice(0, 2);
                    number = value.slice(2);
                    break;

                case 12: // ddd+numero com zero no ddd ex: 021981899735
                    city = value.slice(0, 3);
                    number = value.slice(3);
                    break;

                default:
                    return tel;
            }

            if (number.length === 9) {
                number = number.slice(0, 5) + '-' + number.slice(5);    
            } else if (number.length === 8) {
                number = number.slice(0, 4) + '-' + number.slice(4);    
            }

            return ("(" + city + ") " + number).trim();
        };
    });
})();