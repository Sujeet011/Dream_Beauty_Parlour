const name = localStorage.getItem('userName');
const email = localStorage.getItem('userEmail');
const contact = localStorage.getItem('userContact');

document.getElementById('name').textContent = name;
document.getElementById('email').textContent = email;
document.getElementById('contact').textContent = contact;

function redirectToModels() {
    window.location.href = 'models.html';
}