const drawSquare = ({ position, size, color }, context) => {
  context.beginPath()
  context.fillStyle = color || "red"

  context.fillRect(position.x, position.y, size.width, size.height)
  context.closePath()
}

export default class DrawSquareSystem {
  draw({ canvasRenderingContext }, entities) {
    entities.filter(entity => entity.position && entity.size)
      .forEach(entity => drawSquare(entity, canvasRenderingContext))
  }
}