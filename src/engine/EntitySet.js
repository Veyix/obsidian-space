export default class EntitySet {
  constructor() {
    this.entities = []
  }

  query(...components) {
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