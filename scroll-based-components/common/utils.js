export function random(min, max) {
    // The maximum and the minimum is inclusive
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function select(element, from = document) {
    return from.querySelectorAll(element)
}

export function rect(element) {
    return element.getBoundingClientRect()
}

export function onClick(element, listener) {
    return element.addEventListener('click', listener)
}

export function onDOMContentLoaded(listener) {
    return window.addEventListener('DOMContentLoaded', listener)
}

// https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
// export function onScroll(element, listener) {
//     return element.addEventListener('scroll', listener)
// }

// https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
export function onScroll(element, listener) {
    const scrolled = { top: 0, left: 0 }
    let ticking = false
    return element.addEventListener('scroll', function (e) {
        scrolled.top = element === document ? window.scrollY : e.target.scrollTop
        scrolled.left = element === document ? window.scrollX : e.target.scrollLeft
        if (!ticking) {
            window.requestAnimationFrame(function () {
                listener(scrolled, e)
                ticking = false
            })
            ticking = true
        }
    })
}

export function createElement(tagName) {
    return document.createElement(tagName)
}

// THERE IS A WHEEL EVENT
export function onWheel(element, listener) {
    return element.addEventListener('wheel', listener)
}

export function onMouseOver(element, listener) {
    return element.addEventListener('mouseover', listener)
}

export function onMouseMove(element, listener) {
    return element.addEventListener('mousemove', listener)
}
