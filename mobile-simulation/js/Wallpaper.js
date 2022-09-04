import { onChange } from './util.js';
export class Wallpaper {
    constructor(screen, name) {
        this.src = 'linear-gradient(#1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b)'; // default
        this.size = 'cover'; // default
        this.screen = screen;
        this.picker = document.createElement('input');
        this.picker.type = 'file';
        this.picker.accept = 'image/*';
        this.picker.id = name.trim() + '-wallpaper-picker';
        // make this conditional ?
        this.picker.css('display', 'none');
        this.render();
        onChange(this.picker, ({ target }) => {
            const file = target.files[0];
            if (file)
                this.src = `url(${URL.createObjectURL(file)})`;
            URL.revokeObjectURL(this.src);
            this.render();
            if (this.changed)
                this.changed();
        });
    }
    render() {
        this.screen.css('background-image', this.src);
    }
    attachPickerTo(element, as) {
        element.appendChild(this.picker);
    }
}
