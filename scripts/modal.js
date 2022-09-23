

function creatForgetPasswordModal(){
const modalPage        = document.createElement("section")
const modalContainer   = document.createElement("main")
const modalHeader      = document.createElement("div")
const modalTitle       = document.createElement("p")
const closeModal       = document.createElement("button")
const recoverPassword  = document.createElement("form")
const dataInput        = document.createElement("input")
const emailInput       = document.createElement("input")
const subbimitButton   = document.createElement("button")
const contactSACButton = document.createElement("button")

dataInput.placeholder  = "usário ou CPF"
emailInput.placeholder = "e-mail"


modalContainer.classList.add("container-modal")
closeModal.classList.add("close-modal")
subbimitButton.classList.add("enviar")
contactSACButton.classList.add("via-sac")

modalTitle.innerText = "Recupere sua senha"
closeModal.innerText = "X" 
subbimitButton.innerText = "Enviar"
contactSACButton.innerText = "Recuperar via SAC"


modalHeader.append(modalTitle, closeModal)
recoverPassword.append(dataInput, emailInput, subbimitButton, contactSACButton)
modalContainer.append(modalHeader, recoverPassword)


return modalContainer

}

function showModal (){
    const recoverPasswordButton = document.querySelector(".forget-password")
    const main = document.querySelector("#container")

    recoverPasswordButton.addEventListener("click", function(event){
        event.preventDefault()
        const creatingModal = creatForgetPasswordModal()

        main.appendChild(creatingModal)

        closeModal()
    })

}

showModal ()

function closeModal (){
    const modalButton = document.querySelector(".close-modal")
    const containerModal = document.querySelector(".container-modal")

    modalButton.addEventListener("click", function(){
        containerModal.remove()
    })
}