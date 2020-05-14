import { Vector2, translate } from "../../math"
import Matrix from "../components/Matrix"

const drawSquare = ({ position, size, color }, context) => {
  context.beginPath()
  context.fillStyle = color || "red"

  context.fillRect(position.x, position.y, size.width, size.height)
  context.closePath()
}

export default class RenderSystem {
  execute({ drawContext }, entitySet) {
    const cameras = entitySet.query("viewport", "projection")
    if (cameras.length === 0) {
      return
    }

    const camera = cameras[0]
    const renderables = entitySet.query("position", "size")

    renderables.forEach(renderable => {
      const worldPosition = <Vector2>renderable.components.position
      const projectionMatrix = <Matrix>camera.components.projection
      const screenPosition = translate(worldPosition, projectionMatrix.matrix)

      drawSquare({
        ...renderable.components,
        position: screenPosition
      }, drawContext)
    })
  }
}