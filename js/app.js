const controller = new ClienteController();
document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));