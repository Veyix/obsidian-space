import { keyboard } from "../../engine"

export default class KeyboardMovementSystem {
  execute(_, entities) {
    for (let entityIndex = 0; entityIndex < entities.length; entityIndex++) {
      const entity = entities[entityIndex]

      const keyboardComponent = entity.components.keyboard
      const position = entity.components.position

      if (!keyboardComponent || !position) {
        continue
      }

      for (let keyIndex = 0; keyIndex < keyboardComponent.watchedKeys.length; keyIndex++) {
        const keyCode = keyboardComponent.watchedKeys[keyIndex]

        if (!keyboard.isKeyPressed(keyCode)) {
          continue
        }

        const movement = entity.getComponent(keyCode.toString())
        if (!movement) {
          continue
        }

        position.x += movement.velocity.x
        position.y += movement.velocity.y

        break
      }
    }
  }
}