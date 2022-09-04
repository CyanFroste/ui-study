import { onDOMContentLoaded, onMouseMove, random, rect, select } from '../../common/utils.js'

const container = select('#my-dynamic-moving-images')[0]
const content = select('.content', container)[0]
const items = select('.item', container)
const containerRect = rect(container)

onDOMContentLoaded(() => {
    console.log('items')
})

onMouseMove(container, ({ pageX, pageY }) => {
    const modifier = 120 // limits the translate range with some margin of error ( -ve -> move opposite to direction of mouse )
    items.forEach((item) => {
        const speed = item.dataset.speed
        const x = ((pageX - containerRect.width / 2) * speed) / modifier
        const y = ((pageY - containerRect.height / 2) * speed) / modifier
        item.style.transform = `translate(${x}px, ${y}px)`
    })
    const x = (pageX - containerRect.width / 2) / modifier
    const y = (pageY - containerRect.height / 2) / modifier
    content.style.transform = `translate(${x}px, ${y}px)`
})
