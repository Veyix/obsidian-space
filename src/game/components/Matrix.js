function multiply(matrix, x, y) {
  const vector = [x, y, 0, 0]
  const resultVector = []

  for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
    const vectorComponent = vector[rowIndex]
    const matrixRow = matrix[rowIndex]

    let value = 0
    for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
      const matrixComponent = matrixRow[columnIndex]
      value += (vectorComponent * matrixComponent)
    }

    resultVector[rowIndex] = value
  }

  return {
    x: resultVector[0],
    y: resultVector[1]
  }
}

export default class Matrix {
  constructor(matrix) {
    this.matrix = matrix
  }

  transform({ x, y }) {
    const resultX = (x * this.matrix[0][0]) + (y * this.matrix[1][0]) + this.matrix[3][0]
    const resultY = (x * this.matrix[0][1]) + (y * this.matrix[1][1]) + this.matrix[3][1]

    return {
      x: resultX,
      y: resultY
    }
  }
}

export function createTranslationMatrix({ x, y }) {
  return new Matrix([
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [x, y, 0, 0]
  ])
}