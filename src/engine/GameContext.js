export default class GameContext {
  constructor(canvas) {
    this.canvas = canvas
    this.drawContext = canvas.getContext("2d")
  }
}