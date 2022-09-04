import { onScroll, onWheel, rect, select } from '../../common/utils.js'

// set position and z-index of items via css

export class HorizontalScroll {
    constructor(element) {
        this.container = select(element)[0]
        this.containerWidth = rect(this.container).width
        this.content = select('.content', this.container)
        this.pages = []
        for (const page of select('.page', this.container)) {
            const items = select('.item', page)
            this.pages.push({
                items,
                width: rect(page).width,
            })
        }
        // console.log(this.container, this.containerWidth, this.pages)

        onScroll(this.container, (scrolled) => {
            for (const [page, index] of this.pages) {
                for (const item of page.items) {
                    item.style.transform = `translateX(${-0.3 * scrolled.left}px)`
                }
            }

            if (pages[1].width + secondThreshold - scrolled.left > this.containerWidth) return

            imgsTwo[0].style.transform = `translateX(${
                -0.3 * Math.abs(imgsOneRect.width + secondThreshold - mainElRect.width - scrolled.left)
            }px)`
            imgsTwo[1].style.transform = `translateX(${
                -0.3 * Math.abs(imgsOneRect.width + secondThreshold - mainElRect.width - scrolled.left)
            }px)`
            imgsTwo[2].style.transform = `translateX(${
                -0.6 * Math.abs(imgsOneRect.width + secondThreshold - mainElRect.width - scrolled.left)
            }px)`
        })
    }
}
