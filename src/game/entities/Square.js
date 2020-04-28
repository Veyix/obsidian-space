import { gameEngine, keys } from "../../engine"
import { KeyboardInput, Movement, Position, Size } from "../components"

export default function createSquare(x, y, sideLength, color, moveable) {
  const square = gameEngine.createEntity()
    .addComponent("position", new Position(x, y))
    .addComponent("size", new Size(sideLength, sideLength))

  if (!!color) {
    square.addComponent("color", color)
  }

  if (moveable) {
    square.addComponent("keyboard", new KeyboardInput([keys.LEFT, keys.RIGHT, keys.UP, keys.DOWN]))
      .addComponent(keys.LEFT.toString(), new Movement({ x: -1, y: 0 }))
      .addComponent(keys.RIGHT.toString(), new Movement({ x: 1, y: 0 }))
      .addComponent(keys.UP.toString(), new Movement({ x: 0, y: -1 }))
      .addComponent(keys.DOWN.toString(), new Movement({ x: 0, y: 1 }))
  }

  return square
}