import { gameEngine } from "../../engine"
import { Position, Size } from "../components"

export default function createSquare(x, y, sideLength, color) {
  const square = gameEngine.createEntity()
    .addComponent("position", new Position(x, y))
    .addComponent("size", new Size(sideLength, sideLength))

  if (!!color) {
    square.addComponent("color", color)
  }

  return square
}