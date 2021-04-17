System.register(["./controller/ClienteController"], function (exports_1, context_1) {
    "use strict";
    var ClienteController_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ClienteController_1_1) {
                ClienteController_1 = ClienteController_1_1;
            }
        ],
        execute: function () {
            controller = new AlunoController_1.ClienteController();
            document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));
        }
    };
});
