let email = document.querySelector('#email')
let submit = document.querySelector('#submit')
let form = document.querySelector('#form')
let txt = document.querySelector('#txt')
let box = document.querySelector('#box')
let img = document.querySelector('#img')

form.addEventListener('submit' , function(evt){
    evt.preventDefault();

    const regex = /@gmail.com$/
    let emailValue = email.value;

    if(regex.test(emailValue)){
        email.classList.add('border-success')
        img.src = 'success.png'
    }else{
        email.classList.add('border-danger')
        img.src = 'error.png'
    }

})

