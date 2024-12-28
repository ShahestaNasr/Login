const userName = localStorage.getItem('currentUser');
const logOut = document.querySelector('.btn-outline-warning')
document.getElementById('userNameDisplay').innerText = userName;

logOut.addEventListener('click',function(){
    logout()
})

function logout() {
    localStorage.removeItem('currentUser');  
    window.location.href = 'index.html'; 
}