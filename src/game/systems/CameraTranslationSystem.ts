import EntitySet from "../../engine/EntitySet";
import { Viewport, Matrix } from "../components";
import { createTranslationMatrix } from "../../math";

export default class CameraTranslationSystem {
  execute(_, entitySet: EntitySet) {
    const cameras = entitySet.query("viewport", "projection") || []
    const camera = cameras.length > 0 ? cameras[0] : null

    if (!camera) {
      return
    }

    const viewport = <Viewport>camera.components.viewport
    const projection = <Matrix>camera.components.projection

    const newTranslationMatrix = createTranslationMatrix({ x: viewport.x, y: viewport.y })
    projection.matrix.reset(newTranslationMatrix)
  }
}