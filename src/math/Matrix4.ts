export default class Matrix4 {
  constructor(private readonly values: number[]) {
    if (values.length !== 16) {
      throw new Error("Matrix4 represents a 4x4 matrix and so requires 16 values")
    }
  }

  public get m11(): number {
    return this.values[0]
  }
  
  public get m12(): number {
    return this.values[1]
  }
  
  public get m13(): number {
    return this.values[2]
  }
  
  public get m14(): number {
    return this.values[3]
  }

  public get m21(): number {
    return this.values[4]
  }
  
  public get m22(): number {
    return this.values[5]
  }
  
  public get m23(): number {
    return this.values[6]
  }
  
  public get m24(): number {
    return this.values[7]
  }

  public get m31(): number {
    return this.values[8]
  }
  
  public get m32(): number {
    return this.values[9]
  }
  
  public get m33(): number {
    return this.values[10]
  }
  
  public get m34(): number {
    return this.values[11]
  }

  public get m41(): number {
    return this.values[12]
  }
  
  public get m42(): number {
    return this.values[13]
  }
  
  public get m43(): number {
    return this.values[14]
  }
  
  public get m44(): number {
    return this.values[15]
  }

  public reset(matrix: Matrix4) {
    for (let i = 0; i < this.values.length; i++) {
      this.values[i] = matrix.values[i]
    }
  }
}