const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const signup = document.querySelector('.signup');
const danger = document.querySelector('.text-danger');
const success = document.querySelector('.text-success');
const usersdata = JSON.parse(localStorage.getItem('usersDatabase')) || [];

signup.addEventListener('click', function() {
    if (validate(userName) && validate(userEmail) && validate(userPassword)) {
        if (isEmailUnique(userEmail.value)) {
           let userInfo = {
                Name: userName.value,
                Email: userEmail.value,
                Password: userPassword.value
            };
            usersdata.push(userInfo);
            localStorage.setItem('usersDatabase', JSON.stringify(usersdata));
            console.log(usersdata);
            success.classList.remove('d-none');
            danger.classList.add('d-none')
        } else {
            danger.innerHTML = 'Email already exists!';
            danger.classList.remove('d-none');
            success.classList.add('d-none');
        }
    } else {
        danger.innerHTML = 'All inputs are required';
        danger.classList.remove('d-none');
        success.classList.add('d-none');
    }
});

userName.addEventListener('input', function() {
    validate(userName);
});
userEmail.addEventListener('input', function() {
    validate(userEmail);
});
userPassword.addEventListener('input', function() {
    validate(userPassword);
});

function validate(element) {
    let regex = {
        userName: /^[A-Z][a-z]{3,8}$/,
        userEmail: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        userPassword: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    };

    if (regex[element.id].test(element.value)) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        return true;
    } else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        return false;
    }
}

function isEmailUnique(email) {
    return !usersdata.some(user => user.Email === email);
}

