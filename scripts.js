// Seleciona o elemento do formulário
let formulario = document.querySelector(".formulario");

// Função para exibir o formulário
function aparecerformulario() {
    formulario.style.left = "50%"; // Move o formulário para o centro da tela
}

// Função para esconder o formulário
function desaparecerformulario() {
    formulario.style.left = "-50%"; // Move o formulário para fora da tela
}
