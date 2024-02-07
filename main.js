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


// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         entry.isIntersecting
//         ? entry.target.style.transform = `translateY(-50%)`
//         : entry.target.style.transform = `translateY(0)`

//         console.log(entry.target)
//     });
// }, {
//     threshold: 0.6,
// });

// observer.observe(wrap);









const codeLovers = document.querySelector('#codeLovers')
const codeLoversVideo = document.querySelector('#codeLoversVideo')

codeLovers.onmouseenter = (e) => {
    console.log(e.target)
    codeLoversVideo.play()
}
codeLovers.onmouseleave = (e) => {
    console.log('leave')
    codeLoversVideo.pause()
}


const dentamedic = document.querySelector('#dentamedic')
const dentamedicVideo = document.querySelector('#dentamedicVideo')

dentamedic.onmouseenter = (e) => {
    console.log(e.target)
    dentamedicVideo.play()
}
dentamedic.onmouseleave = (e) => {
    console.log('leave')
    dentamedicVideo.pause()
}


const maxtor = document.querySelector('#maxtor')
const maxtorVideo = document.querySelector('#maxtorVideo')

maxtor.onmouseenter = (e) => {
    console.log(e.target)
    maxtorVideo.play()
}
maxtor.onmouseleave = (e) => {
    console.log('leave')
    maxtorVideo.pause()
}

