import Entity from "./Entity"

export default class EntitySet {
  public readonly entities = []

  query(...components: string[]): Entity[] {
    return this.entities.filter(entity => {
      for (let i = 0; i < components.length; i++) {
        if (!entity.getComponent(components[i])) {

          // One of the components are missing
          return false
        }
      }

      // All components are present on the entity
      return true
    })
  }
}