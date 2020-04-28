import { keyboard } from "../../engine"

export default class KeyboardMovementSystem {
  execute(_, entities) {
    const pressedKeys = keyboard.getPressedKeys()

    entities.forEach(entity => {

      const keyboard = entity.getComponent("keyboard")
      if (!keyboard) {
        return
      }

      keyboard.watchedKeys.forEach(key => {
        if (pressedKeys.indexOf(key) < 0) {
          return
        }

        const movement = entity.getComponent(key.toString())
        const position = entity.components.position

        if (!movement || !position) {
          return
        }
      
        position.x += movement.velocity.x
        position.y += movement.velocity.y
      })
    })
  }
}