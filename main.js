usersdata = JSON.parse(localStorage.getItem('usersDatabase'));
console.log(usersdata);
const Email  = document.getElementById('email')
const Password  = document.getElementById('password')
const signin = document.querySelector('button')
const danger = document.querySelector('.text-danger');
const success = document.querySelector('.text-success');



console.log(Email,Password,signin);

signin.addEventListener('click',function(){
    const uEmail = Email.value
    const uPassword = Password.value
    for(let i = 0; i<usersdata.length; i++){

        if(uEmail==(usersdata[i].Email) && uPassword==(usersdata[i].Password)){
            localStorage.setItem('currentUser', usersdata[i].Name);
            window.location.href = "home.html"
            success.classList.remove('d-none')
            danger.classList.add('d-none')
        }
        else{
            danger.classList.remove('d-none')
            success.classList.add('d-none')
        }
    }
})








