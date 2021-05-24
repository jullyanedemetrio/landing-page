let nome = window.document.querySelector("#nome");
let sobrenome = window.document.querySelector("#sobrenome");
let email = window.document.querySelector("#email");

let nomeOk = false;
let sobrenomeOk = false;
let emailOk = false


function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
        nomeOk = false
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaSobrenome() {
    let txtSobrenome = document.querySelector("#txtSobrenome")
    if (sobrenome.value.length < 2) {
        txtSobrenome.innerHTML = "Sobrenome inválido"
        txtSobrenome.style.color = "red"
        sobrenomeOk = false
    } else {
        txtSobrenome.innerHTML = "Sobrenome válido"
        txtSobrenome.style.color = "green"
        sobrenomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
        emailOk = false
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function enviar() {
    if(nomeOk == true && sobrenomeOk == true && emailOk == true) {
        alert("Formulário enviado!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar!")
    }
}