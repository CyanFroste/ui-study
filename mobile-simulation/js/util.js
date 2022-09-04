HTMLElement.prototype.css = function (property, value) {
    this.style.setProperty(property, value);
    return this;
};
export const select = (target) => document.querySelector(target);
export const selectAll = (target) => document.querySelectorAll(target);
export function onClick(target, listener) {
    target.addEventListener('click', listener);
}
export function onChange(target, listener) {
    target.addEventListener('change', listener);
}
