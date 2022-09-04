export class Clock {
    constructor(render, type = 12) {
        this.render = render;
        this.type = type;
        this.setTime(new Date());
        this.start();
    }
    start() {
        this.timer = setInterval(() => {
            this.setTime(new Date());
        }, 1000);
    }
    stop() {
        clearInterval(this.timer);
    }
    setType(type) {
        this.type = type;
        this.setTime(new Date());
        return this;
    }
    setTime(date) {
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.meridiem = this.hours >= 12 ? 'PM' : 'AM';
        const _minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
        if (this.type === 12) {
            this.time = ((this.hours + 11) % 12) + 1 + ':' + _minutes + ' ' + this.meridiem;
        }
        else
            this.time = this.hours + ':' + _minutes;
        this.render(this.time);
        return this;
    }
    getTime() {
        return this.time;
    }
}
