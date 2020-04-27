export default class DrawingContext {
  constructor(canvas) {
    this.canvas = canvas
    this.canvasRenderingContext = canvas.getContext("2d")
  }
}