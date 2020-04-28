let pressedKeys = []

const onKeyDown = event => pressedKeys.push(event.keyCode)

const onKeyUp = event => {
  const index = pressedKeys.indexOf(event.keyCode)
  if (index >= 0) {
    pressedKeys = pressedKeys.splice(index, 1)
  }
}

const keyboard = {
  initialize() {
    window.addEventListener("keydown", onKeyDown, false)
    window.addEventListener("keyup", onKeyUp, false)
  },

  getPressedKeys() {
    return pressedKeys
  }
}

export default keyboard