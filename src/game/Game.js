import { gameEngine } from "../engine"
import ClearCanvasSystem from "./ClearCanvasSystem"
import DrawSquareSystem from "./DrawSquareSystem"
import Entity from "./Entity"

export default class Game {
  constructor(canvas) {
    gameEngine.setCanvas(canvas)

    gameEngine.use(new ClearCanvasSystem())
    gameEngine.use(new DrawSquareSystem())
  }

  run() {
    const smallSquare = new Entity()
    smallSquare.addComponent("position", { x: 10, y: 10 })
    smallSquare.addComponent("size", { width: 100, height: 100 })

    const blueSquare = new Entity()
    blueSquare.addComponent("position", { x: 10, y: 110 })
    blueSquare.addComponent("size", { width: 200, height: 200 })
    blueSquare.addComponent("color", "blue")

    gameEngine.registerEntity(smallSquare)
    gameEngine.registerEntity(blueSquare)

    gameEngine.start()
  }
}