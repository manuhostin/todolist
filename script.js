document.addEventListener('DOMContentLoaded', function() {
    const inputTarefa = document.getElementById('tarefa');
    const btnAdicionar = document.getElementById('Addtarefa');
    const tarefasPendentes = document.getElementById('tarefaspendentes');
    const tarefasFinalizadas = document.getElementById('tarefasfinalizadas');

    btnAdicionar.addEventListener('click', function() {
        adicionarTarefa();
    });

    inputTarefa.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            adicionarTarefa();
        }
    });

    function adicionarTarefa() {
        const tarefaTexto = inputTarefa.value.trim();

        if (tarefaTexto !== '') {
            const li = document.createElement('li');
            li.textContent = tarefaTexto;

            const botao = document.createElement('button');
            botao.textContent = 'Finalizar';
            botao.addEventListener('click', function() {
                finalizarTarefa(li);
            });

            li.appendChild(botao);

            tarefasPendentes.appendChild(li);

            inputTarefa.value = '';
        }
    }

    function finalizarTarefa(tarefa) {
        tarefasPendentes.removeChild(tarefa);
        tarefasFinalizadas.appendChild(tarefa);
        const botaoFinalizar = tarefa.querySelector('button');
        botaoFinalizar.parentNode.removeChild(botaoFinalizar);
    }
});
