export default class Square {
  constructor(x, y, width, height, color) {
    this.position = { x, y }
    this.size = { width, height }
    this.color = color
  }
}