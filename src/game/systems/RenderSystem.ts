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
      const worldPosition = renderable.components.position
      const screenPosition = camera.components.projection.transform(worldPosition)

      drawSquare({
        ...renderable.components,
        position: screenPosition
      }, drawContext)
    })
  }
}