let email = document.querySelector('#email')
let submit = document.querySelector('#submit')
let form = document.querySelector('#form')
let txt = document.querySelector('#txt')
let box = document.querySelector('#box')

form.addEventListener('submit' , function(evt){
    evt.preventDefault();

    const regex = /@gmail.com$/
    let emailValue = email.value;

    if(regex.test(emailValue)){
        email.classList.add('border-success')
    }else{
        email.classList.add('border-danger')
    }
})

