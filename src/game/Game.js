import { gameEngine } from "../engine"
import { ClearCanvasSystem, DrawSquareSystem, KeyboardMovementSystem } from "./systems"
import { createSquare } from "./entities"

export default class Game {
  constructor(canvas) {
    gameEngine.initialize(canvas)

    gameEngine.use(new ClearCanvasSystem())
    gameEngine.use(new DrawSquareSystem())
    gameEngine.use(new KeyboardMovementSystem())
  }

  run() {
    createSquare(10, 10, 100)
    createSquare(10, 110, 200, "blue", true)

    gameEngine.start()
  }
}