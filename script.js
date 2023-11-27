document.addEventListener('DOMContentLoaded', function() {
    const inputTarefa = document.getElementById('tarefa');
    const btnAdicionar = document.getElementById('Addtarefa');
    const tarefasPendentes = document.getElementById('tarefaspendentes');

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
            tarefasPendentes.appendChild(li);

            inputTarefa.value = '';
        }
    }
});
