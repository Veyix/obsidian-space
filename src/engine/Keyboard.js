const lastState = { pressedKeys: [] }
const currentState = { pressedKeys: [] }

const onKeyDown = event => {
  if (!currentState.pressedKeys.find(keyCode => keyCode == event.keyCode)) {
    currentState.pressedKeys.push(event.keyCode)
  }
}

const onKeyUp = event => {
  const index = currentState.pressedKeys.indexOf(event.keyCode)
  if (index >= 0) {
    currentState.pressedKeys.splice(index, 1)
  }
}

const keyboard = {
  initialize() {
    window.addEventListener("keydown", onKeyDown, false)
    window.addEventListener("keyup", onKeyUp, false)
  },

  isKeyPressed: keyCode => !!currentState.pressedKeys.find(key => key == keyCode)
}

export default keyboard

export class KeyboardSystem {
  execute() {
    lastState.pressedKeys = [...currentState.pressedKeys]
  }
}