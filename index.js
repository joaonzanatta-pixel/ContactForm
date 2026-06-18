//DOOM ELEMENTS

const form = document.querySelector("#form")//busca um elemento no HTML
const nome = document.querySelector('#nome')
const email = document.querySelector("#email")
const fone = document.querySelector('#fone')
const assunto = document.querySelector('#assunto')
const mensagem = document.querySelector('#mensagem')
const botao = document.querySelector(".submit-btn")
const inputs = document.querySelectorAll('input')

// Agora iremos configurar o botao

botao.addEventListener('click', function() {

    console.log("O fornulario foi submetido!")
})

// Aqui estilizaremos as bordas do formulario

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.style.borderColor = "green"
  })

  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.style.borderColor = "red" // vazio — vermelho
    } else {
      input.style.borderColor = "green" // preenchido — verde
    }
  })
})   
   

//Agora iremos realizar a validação do botao

botao.addEventListener('click', function() {
  // se algum estiver VAZIO — mostra erro
  if (nome.value === "" || email.value === "" || assunto.value === "") {
    alert("Preencha todos os campos!")
    return // para aqui, não continua
  }
  
  // se chegou aqui, todos estão preenchidos — mostra sucesso
  alert(`Muito obrigado ${nome.value}! Seu comentário sobre ${assunto.value} foi enviado para nossa equipe!`)
  form.reset()
})