export default class ClearCanvasSystem {
  execute({ canvas, drawContext }) {
    drawContext.beginPath()
    drawContext.fillStyle = "black"

    drawContext.fillRect(0, 0, canvas.width, canvas.height)
    drawContext.closePath()
  }
}