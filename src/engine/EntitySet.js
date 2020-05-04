export default class EntitySet {
  constructor() {
    this.entities = []
  }

  query(...components) {
    return this.entities.filter(entity => {
      for (let i = 0; i < components.length; i++) {
        const component = components[i]
        const componentName = component.name || component
        
        return component.optional === true || !!entity.getComponent(componentName)
      }
    })
  }
}