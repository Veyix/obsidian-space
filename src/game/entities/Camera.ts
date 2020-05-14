import { gameEngine } from "../../engine"
import { createTranslationMatrix, Viewport } from "../components"

export default function createCamera(x: number, y: number, width: number, height: number) {
  return gameEngine.createEntity()
    .addComponent("viewport", new Viewport(x, y, width, height))
    .addComponent("projection", createTranslationMatrix({ x: width / 2, y: height / 2 }))
}