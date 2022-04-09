// primary navigation

const navToggle = document.getElementById('mobile-nav-toggle')
const primaryNavigation = document.getElementById('primary-navigation')

navToggle.addEventListener('click', () => {
 const visibility = primaryNavigation.getAttribute("data-visible")
 if (visibility === "false") {
    primaryNavigation.setAttribute("data-visible", true)
    navToggle.style.backgroundImage = "url('./assets/shared/icon-close.svg')"
 } else {
    primaryNavigation.setAttribute("data-visible", false)
    navToggle.style.backgroundImage = "url('./assets/shared/icon-hamburger.svg')"
 }
})

// destination

// const moonBtn = document.getElementById('moon-btn')
// const marsBtn = document.getElementById('mars-btn')
// const europaBtn = document.getElementById('europa-btn')
// const titanBtn = document.getElementById('titan-btn')

// const moon = document.getElementById('moon')
// const mars = document.getElementById('mars')
// const europa = document.getElementById('europa')
// const titan = document.getElementById('titan')


// moonBtn.addEventListener('click', () => {
//    moon.removeAttribute('hidden')
//    mars.setAttribute("hidden", true)
   

// })