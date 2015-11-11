// scripts/province.js
(function(){

    'use strict';

    angular
        .module('formlyApp')
        .factory('answers', answers);

        function answers() {
            function getAnswers() {
                return [
                    {
                        "name": "Amazing!",
                        "value":"amazing"
                    },
                    {
                        "name": "Pretty Good",
                        "value":"prettygood"
                    },
                    {
                        "name": "Eh",
                        "value": "eh"
                    }
                ];
            }

            return {
                getAnswers: getAnswers
            };
        }
})();