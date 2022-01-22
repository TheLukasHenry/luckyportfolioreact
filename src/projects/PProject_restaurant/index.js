const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.link')
const navbar = document.querySelector('#navbar')

// Need to close menu on click away or scroll


const menuChoices = document.querySelector('.choice')
const choice1 = document.querySelector('#choice-1')
const choice2 = document.querySelector('#choice-2')
const choice3 = document.querySelector('#choice-3')
const choice4 = document.querySelector('#choice-4')
const section1 = document.querySelector('#section-1')
const section2 = document.querySelector('#section-2')
const section3 = document.querySelector('#section-3')
const section4 = document.querySelector('#section-4')
// const menuItem = document.querySelector('#menu-item')
// const outsideNav = document.querySelectorAll('body:not(.navbar)')

// Opening and closing the navbar

navToggle.addEventListener('click', () => {
    navbar.classList.toggle('nav-open')
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('nav-open')
    })
})

document.addEventListener("click", (e) => {
    let targetEl = e.target;    
    do {
      if(targetEl == navbar) {
        return;
      }
      // Go up the DOM
      targetEl = targetEl.parentNode;
    } while (targetEl);
    navbar.classList.remove('nav-open')
});




// adding animation class to footer on contacts click

document.querySelector('#contact').addEventListener('click', () => {
    document.querySelector('#footer').classList.add('footer-animation')
    setTimeout(() => {
        document.querySelector('#footer').classList.remove('footer-animation')
    }, 1100)
    
})



// Menu sections opening and closing
if (choice1){
    choice1.addEventListener('click', () => {
        choice1.classList.toggle('choice-open')
        choice2.classList.remove('choice-open')
        choice3.classList.remove('choice-open')
        choice4.classList.remove('choice-open')
        section1.classList.toggle('open')
        section2.classList.remove('open')
        section3.classList.remove('open')
        section4.classList.remove('open')
    })
}
if (choice2){
    choice2.addEventListener('click', () => {
        choice2.classList.toggle('choice-open')
        choice1.classList.remove('choice-open')
        choice3.classList.remove('choice-open')
        choice4.classList.remove('choice-open')
        section2.classList.toggle('open')
        section1.classList.remove('open')
        section3.classList.remove('open')
        section4.classList.remove('open')
    })
}
if (choice3){
    choice3.addEventListener('click', () => {
        choice3.classList.toggle('choice-open')
        choice2.classList.remove('choice-open')
        choice1.classList.remove('choice-open')
        choice4.classList.remove('choice-open')
        section3.classList.toggle('open')
        section1.classList.remove('open')
        section2.classList.remove('open')
        section4.classList.remove('open')
    })
}
if (choice4){
    choice4.addEventListener('click', () => {
        choice4.classList.toggle('choice-open')
        choice2.classList.remove('choice-open')
        choice3.classList.remove('choice-open')
        choice1.classList.remove('choice-open')
        section4.classList.toggle('open')
        section1.classList.remove('open')
        section2.classList.remove('open')
        section3.classList.remove('open')
    })
}

// Form confirmation page
let emailCollectorForm = document.querySelector("#form")
if (emailCollectorForm){
    emailCollectorForm.addEventListener("submit", event => {
        event.preventDefault()
        let ourFormData = new FormData(event.target)
        let userFirstName = ourFormData.get("name")
        let userEmail = ourFormData.get("email")
        let updatedHtmlContent = `
            <h2 class="congrats">Congratulations, ${userFirstName}!</h2>

            <h3 class="email-confirmation">We sent you a voucher to ${userEmail}, enjoy your meal</h3>
            
            <p class="fineprint">We will never share your information without your permission</p>
        `
        let ourMainContent = document.querySelector(".form-div")
        ourMainContent.innerHTML = updatedHtmlContent
    })
}

