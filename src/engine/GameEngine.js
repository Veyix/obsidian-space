import DrawingContext from "./DrawingContext"
import Entity from "./Entity"

let drawingContext = null

const initializationSystems = []
const updateSystems = []
const drawSystems = []
const entities = []

let lastTimestamp = 0
let loopHandle = 0
  
const init = () => initializationSystems.forEach(system => system.init())

const update = (elapsed) => updateSystems.forEach(system => system.update(entities, elapsed))

const draw = (elapsed) => drawSystems.forEach(system => system.draw(drawingContext, entities, elapsed))

const scheduleLoop = () => loopHandle = window.requestAnimationFrame(loop)

const loop = (timestamp) => {
  const elapsed = timestamp - lastTimestamp
  lastTimestamp = timestamp

  update(elapsed)
  draw(elapsed)

  scheduleLoop()
}

const gameEngine = {
  setCanvas(canvas) {
    drawingContext = new DrawingContext(canvas)
  },

  use(system) {
    if (system.init) {
      initializationSystems.push(system)
    }

    if (system.update) {
      updateSystems.push(system)
    }

    if (system.draw) {
      drawSystems.push(system)
    }
  },

  createEntity() {
    const entity = new Entity()
    entities.push(entity)

    return entity
  },

  start() {
    if (!drawingContext) {
      throw new Error("Canvas has not been set")
    }

    init()
    scheduleLoop()
  },

  stop() {
    window.cancelAnimationFrame(loopHandle)
  }
}

export default gameEngine