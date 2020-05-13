import { Game } from "./game"
import sayHelloWorld from "./hello-world"

sayHelloWorld()

const canvas = document.getElementById("canvas")

const game = new Game(canvas)
game.run()