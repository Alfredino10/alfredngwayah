window.onload = function inIt() {
    let button = document.querySelector('#navbtn');
    let navBar = document.querySelector('.site-nav ul');
   
    button.addEventListener('click', function displayNav(evt) {
        navBar.classList.toggle('active');
    });
}