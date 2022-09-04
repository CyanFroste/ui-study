import { onScroll, onWheel, rect, select } from '../../common/utils.js'

const container = select('#my-scroll')[0]
const pageOne = select('.page.one', container)[0]
const pageTwo = select('.page.two', container)[0]
const pageOneItems = select('.page.one .item', container)
const pageTwoItems = select('.page.two .item', container)
const pageOneRect = rect(pageOne)
const pageTwoRect = rect(pageTwo)
const containerRect = rect(container)

const pageTwoThreshold = 0 // pageTwoRect.width / 2

onWheel(container, ({ deltaY }) => {
    container.scrollLeft += deltaY
})

// manually setting for performance, I guess...
onScroll(container, (scrolled) => {
    pageOneItems[0].style.transform = `translateX(${-0.3 * scrolled.left}px)`
    pageOneItems[1].style.transform = `translateX(${-0.5 * scrolled.left}px)`
    pageOneItems[2].style.transform = `translateX(${-0.7 * scrolled.left}px)`

    // trigger after page 2 has reached the container's view + the set threshold
    // use `if else` if you want to pause the previous sections
    if (pageOneRect.width + pageTwoThreshold - scrolled.left > containerRect.width) return

    pageTwoItems[0].style.transform = `translateX(${
        -0.6 * Math.abs(pageOneRect.width + pageTwoThreshold - containerRect.width - scrolled.left)
    }px)`
    pageTwoItems[1].style.transform = `translateX(${
        -0.3 * Math.abs(pageOneRect.width + pageTwoThreshold - containerRect.width - scrolled.left)
    }px)`
    pageTwoItems[2].style.transform = `translateX(${
        -0.5 * Math.abs(pageOneRect.width + pageTwoThreshold - containerRect.width - scrolled.left)
    }px)`
})
