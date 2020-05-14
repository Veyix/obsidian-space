import Vector2 from "./Vector2"
import Matrix4 from "./Matrix4"

export default function createTranslationMatrix({ x, y }: Vector2): Matrix4 {
  return new Matrix4([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    x, y, 0, 1
  ])
}