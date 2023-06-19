// Header Scrolled
let nav = document.querySelector('.navbar');
window.addEventListener('scroll', function () {

    if (this.window.scrollY > 20) {
        nav.classList.add('header-scrolled');
    }
    else {
        nav.classList.remove('header-scrolled');
    }

})


// Nav Hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach(function (value) {

    value.addEventListener('click', function () {
        navCollapse.classList.remove('show');
    });
})

// Bottom to top

let btn = document.querySelector('.bottom-to-top');

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 100) {
        btn.style.display = 'block';
    }
    else {
        btn.style.display = 'none';
    }
})

btn.addEventListener('click', function () {
    scrollTo({
        top: 75,
        left: 0,
        behavior: "smooth",
        loop: true
    })
})