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
const close = document.querySelector('.close')
const bg = document.querySelector('.bg')
const header = document.querySelector('.header')

order.forEach(ord => {
    ord.addEventListener('click', () => {

        modal.classList.add('show')
    })
})

modal.addEventListener('click', () => {
    console.log('work')
})

close.addEventListener('click', () => {
    modal.classList.remove('show')
})
// bg.addEventListener('click', () => {
//     modal.classList.remove('show')
// })
// header.addEventListener('click', () => {
//     modal.classList.remove('show')
// })