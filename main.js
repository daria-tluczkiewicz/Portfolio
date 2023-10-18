document.querySelector('.burger').addEventListener('click', toggleMobileMenu)
const body = document.body
function toggleMobileMenu () {
    body.classList.toggle('nav-open')
    if (body.classList.contains('nav-open')){
        disableBodyScroll()
    }
}

const navItems = document.querySelectorAll('.nav-item');
const nameButton = document.querySelector('.name a');

nameButton.addEventListener('click', closeNavigation)

navItems.forEach(item => {
    item.addEventListener('click', closeNavigation)
})
function closeNavigation() {
    body.classList.remove('nav-open')
}

// Function to disable body scrolling
function disableBodyScroll(event) {
	body.addEventListener('touchmove', preventScroll, { passive: false });
	console.log('disabled');
}

// Function to enable body scrolling
function enableBodyScroll() {
	body.removeEventListener('touchmove', preventScroll, { passive: false })}

// Function to prevent default touchmove behavior
function preventScroll(event) {
	event.preventDefault();
}


const hero = document.querySelector('.hero');
const skills = document.querySelector('.skills');
const experience = document.querySelector('.experience');
const projects = document.querySelector('.projects');
const footer = document.querySelector('.footer');
const typingText = document.querySelector('.typing-text');

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
observer.observe(typingText);


document.addEventListener('DOMContentLoaded', function () {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

    if(!isTouchDevice){
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseleave', handleMouseLeave)
    } else {
        cursor.style.display = 'none'
    }
})

const cursor = document.getElementById('cursor')

function handleMouseMove(e) {
    cursor.style.visibility = 'visible'
    if (e.target.tagName === 'A'||
    e.target.tagName === 'BUTTON' ||
    e.target.parentNode === 'BUTTON' ||
    e.target.parentNode === 'A'){
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
function handleMouseLeave () {

    cursor.style.visibility = 'hidden'
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