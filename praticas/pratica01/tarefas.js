const tarefas = [
    { id: 1739220546861, nome: "Estudar JavaScript", concluida: false }
];

function listarTarefas() {
    return tarefas;
}

function adicionarTarefa(nomeTarefa) {
    const novaTarefa = {
        id: Date.now(), // Mantém como número
        nome: nomeTarefa,
        concluida: false
    };
    tarefas.push(novaTarefa);
}

function removerTarefa(idTarefa) {
    const posicao = tarefas.findIndex(task => task.id === idTarefa); // Usando ===
    if (posicao !== -1) {
        tarefas.splice(posicao, 1);
    }
}

function modificarTarefa(idTarefa, tarefaModificada) {
    const tarefaLocalizada = tarefas.find(tarefa => tarefa.id === idTarefa); // Usando ===
    if (tarefaLocalizada) {
        Object.assign(tarefaLocalizada, tarefaModificada);
    }
}

export { listarTarefas, adicionarTarefa, removerTarefa, modificarTarefa };