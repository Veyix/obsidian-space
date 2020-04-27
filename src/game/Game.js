import { gameEngine } from "../engine"
import ClearCanvasSystem from "./ClearCanvasSystem"
import DrawSquareSystem from "./DrawSquareSystem"
import Square from "./Square"

export default class Game {
  constructor(canvas) {
    gameEngine.use(new ClearCanvasSystem(canvas))
    gameEngine.use(new DrawSquareSystem(canvas))
  }

  run() {
    gameEngine.registerEntity(new Square(10, 10, 100, 100))
    gameEngine.registerEntity(new Square(10, 110, 200, 200, "blue"))

    gameEngine.start()
  }
}