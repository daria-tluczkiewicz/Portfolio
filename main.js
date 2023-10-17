document.querySelector('.burger').addEventListener('click', toggleMobileMenu)
const body = document.body
function toggleMobileMenu () {
    body.classList.toggle('nav-open')
    if (body.classList.contains('nav-open')){
        disableBodyScroll()
    }
}

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', ()=> {
        body.classList.remove('nav-open')
    })
})

// Function to disable body scrolling
function disableBodyScroll(event) {
	body.addEventListener('touchmove', preventScroll, { passive: false });
	console.log('disabled');
}

// Function to enable body scrolling
function enableBodyScroll() {
	body.removeEventListener('touchmove', preventScroll, { passive: false });
		console.log('enabled');

}

// Function to prevent default touchmove behavior
function preventScroll(event) {
	event.preventDefault();
}


const hero = document.querySelector('.hero');
const skills = document.querySelector('.skills');
const experience = document.querySelector('.experience');
const projects = document.querySelector('.projects');
const footer = document.querySelector('.footer');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
}, {
    threshold: 0.6, // Adjust the threshold as needed
});

observer.observe(hero);
observer.observe(skills);
observer.observe(experience);
observer.observe(projects);
observer.observe(footer);


document.addEventListener('DOMContentLoaded', function () {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

    if(!isTouchDevice){
        document.addEventListener('mousemove', handleMouseMove)
    } else {
        cursor.style.display = 'none'
    }
})

const cursor = document.getElementById('cursor')

function handleMouseMove() {
    if (e.target.tagName === 'A'||
    e.target.tagName === 'BUTTON' ||
    e.target.parentNode === 'BUTTON'){
        cursor.classList.add('big')
    } else {
        cursor.classList.remove('big')
    }
    const height = cursor.offsetHeight
    const width = cursor.offsetWidth

    setTimeout(() => {
        cursor.style.transform = `translate(${e.clientX - width/2}px, ${e.clientY - height/2}px)`
    }, 20)
}


window.addEventListener('scroll', handleScroll)

function handleScroll() {
    const scrollY = window.scrollY;
    const threshold = 100;
    if (scrollY >+ threshold) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  }