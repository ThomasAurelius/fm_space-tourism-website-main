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