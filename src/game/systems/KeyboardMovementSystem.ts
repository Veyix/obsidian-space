import { keyboard } from "../../engine"

export default class KeyboardMovementSystem {
  execute(_, entitySet) {
    const entities = entitySet.query("keyboard", "position")

    entities.forEach(entity => {
      const keyboardComponent = entity.components.keyboard

      for (let keyIndex = 0; keyIndex < keyboardComponent.watchedKeys.length; keyIndex++) {
        const keyCode = keyboardComponent.watchedKeys[keyIndex]

        if (!keyboard.isKeyPressed(keyCode)) {
          continue
        }

        const movement = entity.getComponent(keyCode.toString())
        if (!movement) {
          continue
        }

        entity.components.position.x += movement.velocity.x
        entity.components.position.y += movement.velocity.y

        break
      }
    })
  }
}