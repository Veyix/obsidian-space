import { gameEngine } from "../engine"

const initSystem = {
  init() {
    console.log("INIT SYSTEM")
  }
}

const updateSystem = {
  update(elapsed) {
    console.log(`UPDATE SYSTEM: elapsed = ${elapsed}`)
  }
}

const drawSystem = {
  draw(elapsed) {
    console.log(`DRAW SYSTEM: elapsed = ${elapsed}`)
  }
}

export default class Game {
  constructor() {
    gameEngine.use(initSystem)
    gameEngine.use(updateSystem)
    gameEngine.use(drawSystem)
  }

  run() {
    gameEngine.start()
  }
}