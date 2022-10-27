const body = document.body

const linkText = document.querySelectorAll('.link__text')

linkText.forEach(link => {

    if (link.textContent == body.id) {
        link.classList.add('active')
    }   else {
        link.classList.remove('active')
    }
})