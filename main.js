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


const skills = document.querySelector('.skills-container');

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         entry.isIntersecting
//         ? entry.target.classList.add('animate') 
//         : entry.target.classList.remove('animate');
//     });
// }, {
//     threshold: 0.6,
// });

// observer.observe(skills);


// const typingText = document.querySelector('.typing-text');
// let typingStep = 1

// function typingAnimation(text, delay) {
//     let letters = text.split('')

//     for (let i = 0; i <= letters.length; i++) {
//         setTimeout(()=>{
//             if(typingStep > 2) {
//                 return
//             }
//             if (i === letters.length) {
//                 reverseTypingAnimation(100)
//                 return
//             }
//             let sentence = typingText.innerHTML.length === 0 ? letters[0] : `${typingText.innerHTML + letters[i]}`
//             sentence.concat(`${letters[i]}`)
//             typingText.innerHTML = sentence
//         }, delay * i)
//     }
// }



// function reverseTypingAnimation(delay) {

//     for (let i = 0; i <= 5; i++) {
//         setTimeout(()=>{
//             if(typingStep > 1) {
//                 return
//             }
//             if (i === 5 && typingStep <= 2) {
//                 typingAnimation(' a Frontend Developer', 80)
//                 typingStep++
//                 return
//             }
//             let sentence = `${typingText.innerHTML.slice(0,-1)}`
//             typingText.innerHTML = sentence
//         }, delay * i)
//     }
// }



// document.addEventListener('DOMContentLoaded', function () {
//     setTimeout(() => {
//         typingAnimation(`Hello, I'm Daria`, 100)
//     }, 200)
// })

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