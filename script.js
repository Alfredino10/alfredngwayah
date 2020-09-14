const sources = [
    'images/alfred.jpg',
    'images/monrovia.jpg'
]

var currentpic = 0;


window.onload = function inIt() {
    let button = document.querySelector('#navbtn');
    let navBar = document.querySelector('.site-nav ul');
    
    button.addEventListener('click', function displayNav(evt) {
        navBar.classList.toggle('active');
    });


}

function loadNextpics() {
    mypics.src = sources[currentpic % sources.length];
    currentpic++;
}
function loadPreviouspics() {
    mypics.src = sources[currentpic % sources.length];
    currentpic--;
}