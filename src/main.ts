import style from './style.module.css'

// HEN User Data
// const creator = new URLSearchParams(window.location.search).get('creator')
// const viewer = new URLSearchParams(window.location.search).get('viewer')

const app = document.querySelector<HTMLDivElement>('#app')!
app.className = style.app
app.innerHTML = `
  <div class="${style.container}">
  </div>
`
