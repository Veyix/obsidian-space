const drawSquare = ({ position, size, color }, context) => {
  context.beginPath()
  context.fillStyle = color || "red"

  context.fillRect(position.x, position.y, size.width, size.height)
  context.closePath()
}

export default class DrawSquareSystem {
  constructor(canvas) {
    this.canvas = canvas
    this.context = canvas.getContext("2d")
  }

  draw(elapsed, entities) {
    entities.filter(entity => entity.position && entity.size)
      .forEach(entity => drawSquare(entity, this.context))
  }
}