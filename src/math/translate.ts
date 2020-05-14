import Matrix4 from "./Matrix4"
import Vector2 from "./Vector2"

export default function translate({ x, y }: Vector2, matrix: Matrix4): Vector2 {
  return {
    x: (x * matrix.m11) + (y * matrix.m21) + matrix.m41,
    y: (x * matrix.m12) + (y * matrix.m22) + matrix.m42
  }
}