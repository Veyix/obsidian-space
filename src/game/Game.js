import { GameEngine } from "../engine"

export default class Game {
  constructor() {
    
  }

  run() {
    const engine = new GameEngine()
    engine.start()
  }
}