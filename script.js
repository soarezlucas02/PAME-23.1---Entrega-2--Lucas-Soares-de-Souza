//formulario do alerta
const formulario = document.getElementById("login");
const botaoEnviar = formulario.querySelector("button[type='submit']");

botaoEnviar.addEventListener("click", function(event) {
  event.preventDefault(); // Evitar o envio do formulário


  const username = document.getElementById("username").value;
  const senha = document.getElementById("senha").value;
  const checkbox = document.getElementById("checkbox").checked;

  
  alert(`Usuario: ${username}\nSenha: ${senha}\nLembrar de mim: ${checkbox}`);
});


//mostrar senha

const senha = document.getElementById('senha');
const eye = document.getElementById('eye');

function showHide(){
    if(senha.type === 'password'){
        senha.setAttribute('type', 'text')
        eye.classList.add('hide');
    }
    else{
        senha.setAttribute('type', 'password');
        eye.classList.remove('hide')
    }
}

