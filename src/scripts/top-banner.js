const toggle = document.querySelector(".top-banner__close")

toggle.addEventListener('click', function () {
    const nav = document.querySelector('.top-banner')

    this.classList.toggle("is-active")
    nav.classList.toggle('is-active')
    document.body.classList.toggle('is-active')
})