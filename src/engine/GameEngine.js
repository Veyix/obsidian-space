import GameContext from "./GameContext"
import Entity from "./Entity"
import keyboard from "./Keyboard"
import EntitySet from "./EntitySet"

let gameContext = null

let systems = []
let systemErrors = {}
const entitySet = new EntitySet()

let lastTimestamp = 0
let loopHandle = 0
  
const execute = (elapsed) =>
  systems.filter(system => !system.deleted)
    .forEach((system, systemIndex) => {
      try {
        system.execute(gameContext, entitySet, elapsed)
      }
      catch (error) {
        console.error(error)

        const errorKey = systemIndex.toString()
        if (!systemErrors[errorKey]) {
          systemErrors[errorKey] = 0
        }

        systemErrors[errorKey]++

        if (systemErrors[errorKey] >= 10) {

          // This system keeps failing, so mark it as deleted so we don't execute it anymore
          system.deleted = true

          console.warn("System failed too many times so it was removed")
        }

        // TODO: Log game errors somewhere.
      }
    })

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
    entitySet.entities.push(entity)

    return entity
  },

  start() {
    if (!gameContext) {
      throw new Error("Game Engine has not been initialized")
    }

    keyboard.initialize()
    scheduleLoop()
  },

  stop() {
    window.cancelAnimationFrame(loopHandle)
  }
}

export default gameEngine