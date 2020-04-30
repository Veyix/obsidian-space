import { gameEngine, KeyboardSystem } from "../engine"
import { ClearCanvasSystem, DrawSquareSystem, KeyboardMovementSystem } from "./systems"
import { createSquare } from "./entities"

export default class Game {
  constructor(canvas) {
    gameEngine.initialize(canvas)

    // Update systems
    gameEngine.use(new KeyboardSystem())
    gameEngine.use(new KeyboardMovementSystem())

    // Draw systems
    gameEngine.use(new ClearCanvasSystem())
    gameEngine.use(new DrawSquareSystem())
  }

  run() {
    createSquare(10, 10, 100)
    createSquare(10, 110, 200, "blue", true)

    gameEngine.start()
  }
}