import { gameEngine } from "../engine"
import { ClearCanvasSystem, DrawSquareSystem } from "./systems"
import { createSquare } from "./entities"

export default class Game {
  constructor(canvas) {
    gameEngine.setCanvas(canvas)

    gameEngine.use(new ClearCanvasSystem())
    gameEngine.use(new DrawSquareSystem())
  }

  run() {
    createSquare(10, 10, 100)
    createSquare(10, 110, 200, "blue")

    gameEngine.start()
  }
}