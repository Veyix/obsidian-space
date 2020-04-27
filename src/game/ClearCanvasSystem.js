export default class ClearCanvasSystem {
  constructor(canvas) {
    this.canvas = canvas
    this.context = canvas.getContext("2d")
  }

  draw() {
    this.context.beginPath()
    this.context.fillStyle = "black"

    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.closePath()
  }
}