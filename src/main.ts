import debounce from 'lodash.debounce'
import style from './style.module.css'

// HEN User Data
// const creator = new URLSearchParams(window.location.search).get('creator')
// const viewer = new URLSearchParams(window.location.search).get('viewer')

const LIMITED_SIZE = false

const app = document.querySelector<HTMLDivElement>('#app') as HTMLDivElement

app.className = style.app
app.innerHTML = `
  <div class="${LIMITED_SIZE ? style.limitedContainer : style.fullContainer}">
  </div>
`

const onResize = () => {
  // handle resize here
}

window.addEventListener('resize', debounce(onResize))
