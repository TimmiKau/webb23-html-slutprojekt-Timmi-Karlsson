const boxes = document.querySelectorAll(".pstart")

//What for things to happened to the window, with the scroll. That will check the boxes.
window.addEventListener('scroll', checkBoxes)
checkBoxes()
function checkBoxes () {
    //console.log(window.innerHeight /5*4) //This checks the inner height, and makes it less, then what is shown.
    const triggerBottom = window.innerHeight /5*4
boxes.forEach(pstart => {
    const boxTop = pstart.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
        pstart.classList.add('show')
    }
    else {
        pstart.classList.remove('show')
    }
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
});
}

const order = document.querySelectorAll(".order")

//What for things to happened to the window, with the scroll. That will check the boxes.
window.addEventListener('scroll', checkorder)
checkorder()
function checkorder () {
    //console.log(window.innerHeight /5*4) //This checks the inner height, and makes it less, then what is shown.
    const triggerBottom = window.innerHeight /5*4
order.forEach(order => {
    const boxTop = order.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
        order.classList.add('hidden')
    }
    else {
        order.classList.remove('hidden')
    }
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
});
}