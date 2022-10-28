const body = document.body

const linkText = document.querySelectorAll('.link__text')

linkText.forEach(link => {

    if (link.textContent == body.id) {
        link.classList.add('active')
    }   else {
        link.classList.remove('active')
    }
})

const modal = document.querySelector('.modal-wrapper')
const order = document.querySelectorAll('.bag-block')
const closeBtn = document.querySelector('.close')

order.forEach(ord => {
    ord.addEventListener('click', () => {

        if (document.documentElement.clientWidth < 1024) {
            return
        }
        modal.classList.add('show')
    })
})

function close() {
    if (!closeBtn) {
        return
    }
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show')
    })   
}
close()

const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show_menu')
})