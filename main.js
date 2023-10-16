document.querySelector('.burger').addEventListener('click', toggleMobileMenu)

function toggleMobileMenu () {
    document.body.classList.toggle('nav-open')
}

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', ()=> {
        document.body.classList.remove('nav-open')
    })
})