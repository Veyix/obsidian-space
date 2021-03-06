export default class Entity {
  public readonly components: any = {}

  addComponent(name, component) {
    this.components[name] = component

    return this
  }

  getComponent(name) {
    return this.components[name]
  }

  hasComponent(name) {
    return !this.getComponent(name)
  }
}