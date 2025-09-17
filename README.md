# To-Do List com JavaScript Vanilla

Uma aplicação interativa de lista de tarefas desenvolvida para aplicar e solidificar os conceitos de manipulação direta do DOM e lógica de estado com JavaScript puro.

## Sobre o Projeto

O objetivo central deste projeto foi aplicar os conceitos de JavaScript (ES6+) para a criação de uma Single Page Application (SPA) reativa. O foco foi a implementação de funcionalidades de Criar, Ler, Atualizar e Deletar (CRUD) tarefas, gerenciando o estado diretamente na árvore do DOM, sem o uso de frameworks externos.

A estilização foi feita com CSS3, explorando Flexbox, animações com keyframes e uma experiência de usuário fluida.

## Tecnologias Utilizadas

* HTML5 Semântico
* CSS3 (Flexbox, Keyframe Animations)
* JavaScript (ES6+ / Vanilla)

## Features Implementadas

* Adição dinâmica de novas tarefas.
* Marcação de tarefas como concluídas (com feedback visual).
* Deleção de tarefas (com animação de saída sincronizada via `animationend`).
* Validação de input para não permitir tarefas vazias.

## Principais Conceitos Aplicados

* **Manipulação do DOM:** `createElement`, `appendChild`, `removeChild`, `getElementById`.
* **Event Handling:** `addEventListener` para múltiplos eventos (click, submit).
* **Delegação de Eventos:** Uso de um único listener na lista `<ul>` para gerenciar eventos em todos os seus filhos (`<li>`).
* **Controle de Classes CSS:** `classList.add`, `classList.remove`, `classList.toggle` para gerenciar o estado visual dos elementos.
* **Sincronização de Animação e Lógica:** Uso do evento `animationend` para remover um elemento do DOM apenas após a conclusão da sua animação de saída em CSS.

## Como Rodar o Projeto

1.  Clone este repositório.
2.  Abra o arquivo `index.html` em qualquer navegador moderno.

---
