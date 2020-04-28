import GameContext from "./GameContext"
import Entity from "./Entity"

let gameContext = null

const systems = []
const entities = []

let lastTimestamp = 0
let loopHandle = 0
  
const execute = (elapsed) => systems.forEach(system => system.execute(gameContext, entities, elapsed))

const scheduleLoop = () => loopHandle = window.requestAnimationFrame(loop)

const loop = (timestamp) => {
  const elapsed = timestamp - lastTimestamp
  lastTimestamp = timestamp

  execute(elapsed)
  scheduleLoop()
}

const gameEngine = {
  initialize(canvas) {
    gameContext = new GameContext(canvas)
  },

  use(system) {
    if (!system.execute) {
      throw new Error("The system is missing an execute() function")
    }

    systems.push(system)
  },

  createEntity() {
    const entity = new Entity()
    entities.push(entity)

    return entity
  },

  start() {
    if (!gameContext) {
      throw new Error("Game Engine has not been initialized")
    }

    scheduleLoop()
  },

  stop() {
    window.cancelAnimationFrame(loopHandle)
  }
}

export default gameEngine