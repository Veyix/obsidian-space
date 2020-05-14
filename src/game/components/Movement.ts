interface Velocity {
  x: number
  y: number
}

export default class Movement {
  constructor(public velocity: Velocity) {
  }
}