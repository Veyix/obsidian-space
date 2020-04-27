export default class ClearCanvasSystem {
  draw({ canvas, canvasRenderingContext }) {
    canvasRenderingContext.beginPath()
    canvasRenderingContext.fillStyle = "black"

    canvasRenderingContext.fillRect(0, 0, canvas.width, canvas.height)
    canvasRenderingContext.closePath()
  }
}