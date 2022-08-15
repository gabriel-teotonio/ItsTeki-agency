
const form = document.querySelector('form')
const btnForm = document.querySelector("form .btn")

const openModal = (e) => {
    e.preventDefault() 
    form.reset()
    Swal.fire({
        icon: 'success',
        title:'Enviado com sucesso',
        text:'Você irá receber seu orçamento em seu email, fique atento!'
    }).then((result) => {
       if(result.isConfirmed){
        window.location.href = 'index.html';
       }
    })
}


form.addEventListener('submit', openModal) 