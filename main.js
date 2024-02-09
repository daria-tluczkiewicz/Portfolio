document.querySelector('.burger').addEventListener('click', toggleMobileMenu)
const body = document.body

function toggleMobileMenu () {
    body.classList.toggle('nav-open')
    if (body.classList.contains('nav-open')){
        disableBodyScroll()
    } else {
        enableBodyScroll()
    }
}

const navItems = document.querySelectorAll('.nav-item');
const nameButton = document.querySelector('.name a');

// nameButton.addEventListener('click', closeNavigation)

navItems.forEach(item => {
    item.addEventListener('click', closeNavigation)
})
function closeNavigation() {
    body.classList.remove('nav-open')
    enableBodyScroll()
}

// Function to disable body scrolling
function disableBodyScroll(event) {
	body.addEventListener('touchmove', preventScroll, { passive: false });
}

// Function to enable body scrolling
function enableBodyScroll() {
	body.removeEventListener('touchmove', preventScroll, { passive: false })}

// Function to prevent default touchmove behavior
function preventScroll(event) {
	event.preventDefault();
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


const nav = document.getElementById('nav')

navItems.forEach((item, index) => item.addEventListener('mouseenter', function () {
    nav.classList.add(item.classList[1])
}))

navItems.forEach((item, index) => item.addEventListener('mouseleave', function () {
    nav.classList.remove(item.classList[1])
}))



const container = document.querySelector('#skillsContainer');
const wrap = document.querySelector('#movingContainer');
const moveHandler = (event) => {
    const { x: x1, y: y1, width: w1, height: h1 } = container.getBoundingClientRect()
    const { width: w2, height: h2 } = wrap.getBoundingClientRect()
    const { clientX, clientY } = event;
    const maxMoveX = w2 - w1;
    const maxMoveY = h2 - h1;
    const translateX = (clientX - x1) * maxMoveX / w1;
    const translateY = (clientY - y1) * maxMoveY / h1;

    wrap.style.transform = `translate(${-translateX}px, ${-translateY}px)`
}

container.addEventListener('mousemove', moveHandler);

function isElementOverTheMiddle(el) {
    const {top, height} = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
      top >= 0 &&
      top + height / 2 >= windowHeight / 2
    );
}

window.addEventListener('scroll', handleSkillsScroll);

function handleSkillsScroll() {
    if (isElementOverTheMiddle(container)) {
        wrap.classList.remove('scroll-down')
        wrap.classList.add('scroll-up')
        return
    }
    wrap.classList.remove('scroll-up')
    wrap.classList.add('scroll-down')
}


const projects = [codeLovers, dentamedic, maxtor]

projects.forEach(project => {
    const projectElement = document.querySelector(`#${project.id}`)
    const projectVideo = document.querySelector(`#${project.id}Video`)

    projectElement.onmouseenter = (e) => {
        projectVideo.play()
    }
    projectElement.onmouseleave = (e) => {
        projectVideo.pause()
    }
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        const video = entry.target.querySelectorAll(' video')
        
        if (!entry.isIntersecting){
            video.length != 0 ? video[0].pause() : null
            entry.target.classList.remove('hover')
            return
        }
        if (video.length === 0 ) {
            entry.target.classList.add('hover')
            return
        }
        if (entry.isIntersecting) {
            video[0].play()
            entry.target.classList.add('hover')
            return
        }
    })
}, {
    threshold: 0.8
})


const projectBoxes = document.querySelectorAll('.project')

projectBoxes.forEach((box) => {
    observer.observe(box)
})