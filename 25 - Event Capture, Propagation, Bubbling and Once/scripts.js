'use strict'

const divs = document.querySelectorAll('div')

function logText (e) {
  e.stopPropagation() // stop bubbling
}

divs.forEach(div => div.addEventListener('click', logText, { capture: true }))

button.addEventListener('click', () => {
  console.log('Click!')
}, {
  once: true //unbinds listener after first click
})
