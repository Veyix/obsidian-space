export default class GameContext {
  public readonly drawContext

  constructor(public readonly canvas) {
    this.drawContext = canvas.getContext("2d")
  }
}