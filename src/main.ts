import debounce from 'lodash.debounce'
import style from './style.module.css'

// HEN User Data
// const creator = new URLSearchParams(window.location.search).get('creator')
// const viewer = new URLSearchParams(window.location.search).get('viewer')

// set this to true if you want to override css' max-width variable on fullscreen
const OVERWRITE_ON_FULLSCREEN = false

const app = document.querySelector<HTMLDivElement>('#app')!
app.className = style.app
app.innerHTML = `
  <div class="${style.wrapper}">
    <div class="${style.container}">
    </div>
  </div>
`

const onResize = () => {
  if (OVERWRITE_ON_FULLSCREEN) {
    const { innerWidth, innerHeight } = window
    window.document.documentElement.style.setProperty('--max-width', `${Math.min(innerHeight, innerWidth)}px`)
  }
}

window.addEventListener('resize', debounce(onResize))
onResize()
