import { gameEngine } from "../engine"
import ClearCanvasSystem from "./ClearCanvasSystem"
import DrawSquareSystem from "./DrawSquareSystem"

export default class Game {
  constructor(canvas) {
    gameEngine.setCanvas(canvas)

    gameEngine.use(new ClearCanvasSystem())
    gameEngine.use(new DrawSquareSystem())
  }

  run() {
    gameEngine.createEntity()
      .addComponent("position", { x: 10, y: 10 })
      .addComponent("size", { width: 100, height: 100 })

    gameEngine.createEntity()
      .addComponent("position", { x: 10, y: 110 })
      .addComponent("size", { width: 200, height: 200 })
      .addComponent("color", "blue")

    gameEngine.start()
  }
}