declare global {
    interface HTMLElement {
        css: (property: string, value: string | null) => this
    }
}

HTMLElement.prototype.css = function (property: string, value: string | null) {
    this.style.setProperty(property, value)
    return this
}

export const select = <E extends HTMLElement>(target: string) => document.querySelector(target) as E
export const selectAll = <E extends HTMLElement>(target: string) => document.querySelectorAll(target) as NodeListOf<E>

export function onClick<E extends HTMLElement>(target: E, listener: EventListenerOrEventListenerObject) {
    target.addEventListener('click', listener)
}
export function onChange<E extends HTMLElement>(target: E, listener: EventListenerOrEventListenerObject) {
    target.addEventListener('change', listener)
}
