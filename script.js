// show menu

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*validate if constant exists*/
    if (navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }


/*MENU HIDDEN */
/*Validates if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// Add Blur to Header
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                                : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


// Email Js
const contactForm = document.getElementById('contact-form')
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    // ServiceID - templateID - form -publickey
    emailjs.sendEmail('service_vkbwfnc','template_quwtg9n','#contact-form','fXYXhMoX_GVW_NtL')

                .then(() =>{
                    // Show sent message
                    contactMessage.textContent = 'Message sent successfully✅'

                    // Remove message after 5 seconds
                    setTimeout(() =>{
                        contactMessage.textContent =''
                    }, 5000)

                    // Clear input fields
                    contactForm.reset()
                    
                }, () =>{
                    // Show Error Message
                    contactMessage.textContent = 'Message not sent (service error ❌'
                })
}

contactForm.addEventListener('submit', sendEmail)