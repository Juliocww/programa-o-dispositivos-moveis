import readline from "readline-sync";
import { listarTarefas, adicionarTarefa, removerTarefa, modificarTarefa } from "./tarefas.js";

function exibirMenu() {
    console.log("MENU PRINCIPAL");
    console.log("1 - Adicionar tarefas");
    console.log("2 - Listar tarefas");
    console.log("3 - Remover tarefa");
    console.log("4 - Modificar tarefa");
    console.log("5 - Sair");
}

function escolherOpcao(opcao) {
    switch (opcao) {
        case "1": {
            const nome = readline.question("Entre com o nome da tarefa: ");
            adicionarTarefa(nome);
            console.log("Tarefa adicionada com sucesso!");
            break;
        }

        case "2": {
            const tarefas = listarTarefas();
            console.log("Minhas tarefas:");
            tarefas.forEach((tarefa) => {
                console.log(`ID: ${tarefa.id} - Nome: ${tarefa.nome} - Concluída: ${tarefa.concluida}`);
            });
            break;
        }

        case "3": {
            const id = Number(readline.question("Entre com o id da tarefa: "));
            const tarefaExiste = tarefas.some(tarefa => tarefa.id === id);
            if (tarefaExiste) {
                removerTarefa(id);
                console.log("Tarefa removida com sucesso!");
            } else {
                console.log("Tarefa não encontrada!");
            }
            break;
        }

        case "4": {
            const id = Number(readline.question("Entre com o id da tarefa: "));
            const tarefaExiste = tarefas.some(tarefa => tarefa.id === id);
            if (tarefaExiste) {
                const nome = readline.question("Entre com o nome da tarefa: ");
                const concluida = readline.question("Entre com o status da tarefa (true/false): ") === "true";
                modificarTarefa(id, { nome, concluida });
                console.log("Tarefa modificada com sucesso!");
            } else {
                console.log("Tarefa não encontrada!");
            }
            break;
        }

        case "5":
            console.log("Saindo...");
            process.exit(0);
            break;

        default:
            console.log("Opção inválida. Tente novamente!");
    }
}

function main() {
    while (true) {
        exibirMenu();
        const opcao = readline.question("Escolha uma opcao: ");
        escolherOpcao(opcao);
    }
}

main();