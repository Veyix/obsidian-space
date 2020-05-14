import { gameEngine } from "../../engine"
import { Matrix, Viewport } from "../components"
import { createTranslationMatrix } from "../../math"

export default function createCamera(x: number, y: number, width: number, height: number) {
  return gameEngine.createEntity()
    .addComponent("viewport", new Viewport(x, y, width, height))
    .addComponent("projection", new Matrix(createTranslationMatrix({ x: width / 2, y: height / 2 })))
}