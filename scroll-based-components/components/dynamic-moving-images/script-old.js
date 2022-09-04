import { overlaps } from '../../common/algorithm.js'
import { createElement, random, rect, select } from '../../common/utils.js'

const mainEl = select('main')[0]
const board = select('.board')[0]
const mainElRect = rect(mainEl)
const boardRect = rect(board)

// ? accurate
const IMG_HEIGHT = Math.floor(mainElRect.width < mainElRect.height ? mainElRect.width / 3 : mainElRect.height / 4)

const ASPECT_RATIO = 4 / 5

const NUM_IMAGES = 8
const IMAGES = []

render()

function render() {
    for (let i = 0; i < NUM_IMAGES; i++) {
        const img = createElement('div')
        img.classList.add('img')
        img.style.height = IMG_HEIGHT + 'px'
        img.style.width = Math.floor(IMG_HEIGHT / ASPECT_RATIO) + 'px'
        let x = random(0, boardRect.width - Math.floor(IMG_HEIGHT / ASPECT_RATIO))
        let y = random(0, boardRect.height - IMG_HEIGHT)

        if (i !== 0) {
            for (let k = 0; k < IMAGES.length; k++) {
                const imgPos = IMAGES[k]
                if (
                    overlaps(
                        {
                            firstTopLeft: { x, y },
                            firstBottomRight: { x: x + Math.floor(IMG_HEIGHT / ASPECT_RATIO), y: y + IMG_HEIGHT },
                        },
                        {
                            secondTopLeft: { x: imgPos.topLeft.x, y: imgPos.topLeft.y },
                            secondBottomRight: { x: imgPos.bottomRight.x, y: imgPos.bottomRight.y },
                        },
                        20
                    )
                ) {
                    x = random(0, boardRect.width - Math.floor(IMG_HEIGHT / ASPECT_RATIO))
                    y = random(0, boardRect.height - IMG_HEIGHT)
                    k = -1
                }
            }
        }

        img.style.left = x + 'px'
        img.style.top = y + 'px'
        board.appendChild(img)

        IMAGES.push({
            img,
            topLeft: { x, y },
            bottomRight: { x: x + Math.floor(IMG_HEIGHT / ASPECT_RATIO), y: y + IMG_HEIGHT },
        })
    }
}
