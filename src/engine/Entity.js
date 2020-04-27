export default class Entity {
  constructor() {
    this.components = {}
  }

  addComponent(name, component) {
    this.components[name] = component

    return this
  }

  getComponent(name) {
    return this.components[name]
  }
}