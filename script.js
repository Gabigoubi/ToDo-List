const input = document.getElementById("input");
const botaoAdd = document.getElementById("addTarefa");
const listaTarefa = document.getElementById("lista-tarefa");

function addTarefa() {
  const textoTarefa = input.value.trim();
  if (textoTarefa === "") {
    console.log("Nenhuma tarefa foi adicionada");
    return alert("Digite uma tarefa!");
  }
  const li = document.createElement("li");
  li.classList.add("tarefa");
  const span = document.createElement("span");
  span.textContent = textoTarefa;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const deletar = document.createElement("button");
  deletar.textContent = "X";
  deletar.classList.add("btn-delete");
  checkbox.classList.add("checkbox");
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deletar);

  listaTarefa.appendChild(li);
  input.value = "";
  input.focus();
}

botaoAdd.addEventListener("click", () => {
  addTarefa();
  if (input.value === "") {
    return;
  }
  console.log("Uma tarefa foi adicionada!");
});

listaTarefa.addEventListener("click", (event) => {
  if (event.target.type === "checkbox") {
    const tarefaCompletada = event.target.closest("li");
    tarefaCompletada.classList.toggle("completed");
    console.log("A regra COMPLETED foi adicionada a tarefa!");
  }
  if (event.target.classList.contains("btn-delete")) {
    const tarefaDeletada = event.target.closest("li");
    tarefaDeletada.classList.toggle("delete");
    console.log("Animação da tarefa sendo excluída iniciada");
    tarefaDeletada.addEventListener("animationend", () => {
      listaTarefa.removeChild(tarefaDeletada);
    });
  }
});
