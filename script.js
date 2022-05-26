const bars = document.querySelector('.fa-bars')
const ul = document.querySelector('nav ul')


bars.addEventListener('click', toggleBars)

function toggleBars(e) {
    ul.classList.toggle('active')
}