/*==================== SHOW MENU ====================*/
const navToggle = document.querySelector('#nav-toggle'),
      navMenu = document.querySelector('#nav-menu');

const showMenu = () => {
    navMenu.classList.toggle('show-menu')
}

navToggle.addEventListener('click', showMenu);

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = function(){
    const navMenu = document.querySelector('#nav-menu')
    // When we click on any .nav__link remove the menu from screen
    navMenu.classList.remove('show-menu')
}

// Adding eventlistener to all .nav__link
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}

window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL TOP ====================*/ 
const scrollUp = () =>{
	const scrollUp = document.querySelector('#scroll-top')
  const scrollY = window.pageYOffset
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scrolltop')
						: scrollUp.classList.remove('show-scrolltop')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.querySelector('#theme-button')

const themeChange = () => {
  if(themeButton.classList.contains('bxs-moon')){
    themeButton.classList.remove('bxs-moon')
    themeButton.classList.add('bx-sun')
    document.querySelector('body').classList.add('dark-theme')
  }
  else{
    themeButton.classList.remove('bx-sun')
    themeButton.classList.add('bxs-moon')
    document.querySelector('body').classList.remove('dark-theme')
  }
}

themeButton.addEventListener('click', themeChange)

/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/ 

function scaleCv(){
  let skill = document.querySelector('#skills');
  let education = document.querySelector('#experience');
  let language = document.querySelector('#languages');
  skill.classList.add('skills-padding')
  education.classList.add('education-padding')
  language.classList.add('languages-padding')
}

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/ 

function removeScale(){
  let skill = document.querySelector('#skills');
  let education = document.querySelector('#experience'); 
  let language = document.querySelector('#languages');
  education.classList.remove('education-padding')
  skill.classList.remove('skills-padding');
  language.classList.remove('languages-padding')
  
}


/*==================== GENERATE PDF ====================*/ 
// PDF generated area
let areaCv = document.getElementById("area-cv")
let resumeButton = document.getElementById("resume-button")


// Html2pdf options

let opt = {
  margin: 0,
  filename: "myResume.pdf",
  image: {type: 'jpeg', quality:0.98},
  html2canvas: {dpi: 192},
  jsPDF: {format:'tabloid', orientation: 'portrait'}
}

// Function to call areaCv and Html2Pdf options 
function generateResume(){
  html2pdf(areaCv, opt)
}

// When the button is clicked, it executes the three functions
resumeButton.addEventListener("click", () => {
    // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
    scaleCv()

    // 2. The PDF is generated
    generateResume()


    // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
    setTimeout(removeScale, 3500)
  })