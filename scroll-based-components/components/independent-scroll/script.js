import { onScroll, onWheel, rect, select } from '../../common/utils.js'

const container = select('#my-scroll-container')[0]
const containerRect = rect(container)
const stickyContainer = select('.sticky-container', container)[0]
const stickyContainerRect = rect(stickyContainer)
const scrollItem = select('.scroll-item', stickyContainer)[0]
const scrollItemRect = rect(scrollItem)

let stickyContainerTop = stickyContainer.offsetTop - container.offsetTop

let stuck = false
let itemScrolled = false

const stick = () => {
    stickyContainer.classList.add('stuck')
    stuck = true
}

const unstick = () => {
    stickyContainer.classList.remove('stuck')
    stuck = false
}

onWheel(container, ({ deltaY }) => {
    if (stuck) {
        stickyContainer.scrollTop += deltaY
    } else {
        container.scrollTop += deltaY
    }
})

onScroll(container, (scrolled) => {
    console.log(scrolled)
    // console.log(stickyContainerTop)
    // console.log(stuck, stickyContainerTop - scrolled.top)
    // console.log(itemScrolled)
    if (
        (stickyContainerTop - scrolled.top <= 0 && !itemScrolled) ||
        (stickyContainerTop - scrolled.top >= 0 && itemScrolled)
    ) {
        stick()
    }
})

onScroll(stickyContainer, (scrolled) => {
    // console.log(scrolled, scrollItemRect.height)
    if (scrolled.top + stickyContainerRect.height === scrollItemRect.height) {
        itemScrolled = true
        unstick()
    }
    if (scrolled.top === 0 && stuck) {
        itemScrolled = false
        unstick()
    }
})
