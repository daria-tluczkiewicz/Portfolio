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
    threshold: 0.8, // Adjust the threshold as needed
});

observer.observe(hero);
observer.observe(skills);
observer.observe(experience);
observer.observe(projects);
observer.observe(footer);