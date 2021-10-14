import debounce from 'lodash.debounce'
import style from './style.module.css'

// HEN User Data
// const creator = new URLSearchParams(window.location.search).get('creator')
// const viewer = new URLSearchParams(window.location.search).get('viewer')

// set this to false if you want to limit your app size on fullscreen to css' max-width variable
const OVERWRITE_ON_FULLSCREEN = import.meta.env.PROD

const app = document.querySelector<HTMLDivElement>('#app')!
app.className = style.app
app.innerHTML = `
  <div class="${style.container}"></div>
`

const onResize = () => {
  if (OVERWRITE_ON_FULLSCREEN) {
    const { innerWidth, innerHeight } = window
    window.document.documentElement.style.setProperty('--max-width', `${Math.min(innerHeight, innerWidth)}px`)
  }
}

window.addEventListener('resize', debounce(onResize))
