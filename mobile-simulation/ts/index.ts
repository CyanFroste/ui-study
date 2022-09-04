import { Clock } from './Clock.js'
import { onClick, select } from './util.js'
import { Wallpaper } from './Wallpaper.js'

const clockComponent = select<HTMLDivElement>('.clock')
const searchBtn = select<HTMLButtonElement>('#search')
const homeScreen = select('.home')
const drawerScreen = select('.drawer')
const wallpaperSettingsScreen = select('.wallpaper-settings')
const wallpaperPickerComponent = select('.wallpaper-picker')
const homeWallpaperScreen = select('.wallpaper')
const homeWallpaperThumbnail = select<HTMLLabelElement>('.homescreen-wallpaper-thumbnail')

const clock = new Clock((time) => (clockComponent.innerHTML = time))
console.log(clock.getTime())

onClick(searchBtn, () => {
    homeScreen.classList.toggle('blur')
    drawerScreen.classList.toggle('open')
})

const wallpaper = new Wallpaper(homeWallpaperScreen, 'homescreen')
wallpaper.attachPickerTo(wallpaperPickerComponent)
wallpaper.changed = () => wallpaperSettingsScreen.css('display', 'none')

homeWallpaperThumbnail.htmlFor = wallpaper.picker.id
homeWallpaperThumbnail.css('background-image', wallpaper.src)

onClick(select('.wallpaper-settings .close'), () => wallpaperSettingsScreen.css('display', 'none'))
onClick(select('.dock .item:first-child'), () => {
    wallpaperSettingsScreen.css('display', 'flex')
    homeWallpaperThumbnail.css('background-image', wallpaper.src)
})
