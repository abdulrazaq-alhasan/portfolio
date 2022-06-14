const hamburgar = document.querySelector('.fa-bars')
const navUl = document.querySelector('nav ul')


hamburgar.addEventListener('click', () => {
    navUl.classList.toggle('show')
})
