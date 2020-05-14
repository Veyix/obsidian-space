export default class KeyboardInput {
  public readonly watchedKeys: number[]

  constructor(watchedKeys: number[]) {
    this.watchedKeys = watchedKeys || []
  }
}