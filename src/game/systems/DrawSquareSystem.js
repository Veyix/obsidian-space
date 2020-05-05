const drawSquare = ({ position, size, color }, context) => {
  context.beginPath()
  context.fillStyle = color || "red"

  context.fillRect(position.x, position.y, size.width, size.height)
  context.closePath()
}

export default class DrawSquareSystem {
  execute({ drawContext }, entitySet) {
    entitySet.query("position", "size")
      .forEach(entity => drawSquare(entity.components, drawContext))
  }
}