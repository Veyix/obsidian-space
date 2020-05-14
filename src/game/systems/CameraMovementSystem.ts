import EntitySet from "../../engine/EntitySet";
import { keyboard } from "../../engine";
import { Movement } from "../components";

export default class CameraMovementSystem {
  execute(_, entitySet: EntitySet) {
    const entities = entitySet.query("viewport", "keyboard")
    const camera = entities.length > 0 ? entities[0] : null

    if (!camera) {
      return
    }

    for (let i = 0; i < camera.components.keyboard.watchedKeys.length; i++) {
      const key = camera.components.keyboard.watchedKeys[i]
      const keyBasedMovement = camera.getComponent(key.toString()) as Movement

      if (!keyBasedMovement) {
        continue
      }

      if (keyboard.isKeyPressed(key)) {
        camera.components.viewport.x += keyBasedMovement.velocity.x
        camera.components.viewport.y += keyBasedMovement.velocity.y

        break
      }
    }
  }
}