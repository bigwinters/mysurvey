(function() {

    'use strict';

    angular
        .module('formlyApp')
        .controller('MainController', MainController);

    function MainController(answers) {
    var vm = this;
    vm.survey = {};
    vm.options = {};

    vm.surveyFields = [
        {
            key: 'first_question',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: "Here's where I'd put the first question",
                placeholder: "And here's where I'd like the first answer to go.",
                required: true
            }
        },
        {
            key: 'second_question',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: "And here's the spot for the second question",
                placeholder: "And here's where the second answer goes. Both of them are required",
                required: true
            }
        },
        {
            key: 'phonenumber',
            type: 'input',
            className: "number",
            templateOptions: {
                label: 'Please enter your phone number',
                placeholder: 'Numbers only please! Typing in characters is forbidden!',
                type: 'number',
            },
        },
        {
            key: 'radiooptions',
            type: 'radio',
            templateOptions: {
                label: "Do you like radio buttons?",
                options: [
                    {
                        "name": "I love them!",
                        "value": "love"
                    },
                    {
                        "name": "Eh.",
                        "value": "eh"
                    },
                    {
                        "name": "I hate them!",
                        "value": "hate"
                    }
                ]
            },
        },
        {
            key: 'rate',
            type: 'select',
            templateOptions: {
                label: 'How would you rate this survey?',
                options: answers.getAnswers(),
                required: true
            },
            hideExpression: '!model.second_question || !model.first_question',
        }
    ];
}

})();

