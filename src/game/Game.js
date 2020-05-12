import { gameEngine, KeyboardSystem } from "../engine"
import * as systems from "./systems"
import { createSquare } from "./entities"
import createCamera from "./entities/Camera"

export default class Game {
  constructor(canvas) {
    this.canvas = canvas

    gameEngine.initialize(canvas)

    // Update systems
    gameEngine.use(new KeyboardSystem())
    gameEngine.use(new systems.KeyboardMovementSystem())

    // Draw systems
    gameEngine.use(new systems.ClearCanvasSystem())
    gameEngine.use(new systems.RenderSystem())
  }

  run() {
    createCamera(0, 0, this.canvas.width, this.canvas.height)
    createSquare(10, 10, 100)
    createSquare(10, 110, 200, "blue", true)

    gameEngine.start()
  }
}