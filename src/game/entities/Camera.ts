import { gameEngine, keys } from "../../engine"
import { Matrix, Viewport, KeyboardInput, Movement } from "../components"
import { createTranslationMatrix } from "../../math"

export default function createCamera(x: number, y: number, width: number, height: number) {
  return gameEngine.createEntity()
    .addComponent("viewport", new Viewport(x, y, width, height))
    .addComponent("projection", new Matrix(createTranslationMatrix({ x: width / 2, y: height / 2 })))
    .addComponent("keyboard", new KeyboardInput([keys.W, keys.A, keys.D, keys.S]))
    .addComponent(keys.W.toString(), new Movement({ x: 0, y: -10 }))
    .addComponent(keys.A.toString(), new Movement({ x: -10, y: 0 }))
    .addComponent(keys.D.toString(), new Movement({ x: 10, y: 0 }))
    .addComponent(keys.S.toString(), new Movement({ x: 0, y: 10 }))
}