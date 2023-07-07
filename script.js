const formulario = document.getElementById("login");
const botaoEnviar = formulario.querySelector("button[type='submit']");

botaoEnviar.addEventListener("click", function(event) {
  event.preventDefault(); // Evitar o envio do formulário


  const username = document.getElementById("username").value;
  const senha = document.getElementById("senha").value;
  const checkbox = document.getElementById("checkbox").checked;

  // Exibir os valores em um alerta
  alert(`Usuario: ${username}\nSenha: ${senha}\nLembrar de mim: ${checkbox}`);
});

