import { getNestedValue, setNestedValue } from '../form'

describe('getNestedValue', () => {
  it('should return the nested value when the path exists', () => {
    const obj = {
      foo: {
        bar: {
          baz: 'value',
        },
      },
    }
    const path = 'foo.bar.baz'
    const result = getNestedValue(obj, path)
    expect(result).toEqual('value')
  })

  it('should return undefined when the path does not exist', () => {
    const obj = {
      foo: {
        bar: {
          baz: 'value',
        },
      },
    }
    const path = 'foo.bar.qux'
    const result = getNestedValue(obj, path)
    expect(result).toBeUndefined()
  })

  it('should return undefined when the value is null', () => {
    const obj = {
      foo: null,
    }
    const path = 'foo.bar'
    const result = getNestedValue(obj, path)
    expect(result).toBeUndefined()
  })

  it('should return undefined when the value is undefined', () => {
    const obj = {
      foo: undefined,
    }
    const path = 'foo.bar'
    const result = getNestedValue(obj, path)
    expect(result).toBeUndefined()
  })

  it('should return undefined when the value is not an object', () => {
    const obj = {
      foo: 'value',
    }
    const path = 'foo.bar'
    const result = getNestedValue(obj, path)
    expect(result).toBeUndefined()
  })

  it('should return the nested value when the path contains array notation', () => {
    const obj = {
      foo: [
        {
          bar: 'value',
        },
      ],
    }
    const path = 'foo[0].bar'
    const result = getNestedValue(obj, path)
    expect(result).toEqual('value')
  })
})

describe('setNestedValue', () => {
  it('should set the nested value when the path exists', () => {
    const obj = {
      foo: {
        bar: {
          baz: 'value',
        },
      },
    }
    const path = 'foo.bar.baz'
    const newValue = 'new value'
    setNestedValue(obj, path, newValue)
    expect(obj.foo.bar.baz).toEqual(newValue)
  })

  it('should create the nested path and set the value when the path does not exist', () => {
    const obj = {} as any
    const path = 'foo.bar.baz'
    const newValue = 'value'
    setNestedValue(obj, path, newValue)
    expect(obj.foo.bar.baz).toEqual(newValue)
  })

  it('should create an array when the path contains array notation', () => {
    const obj = {} as any
    const path = 'foo[0].bar'
    const newValue = 'value'
    setNestedValue(obj, path, newValue)
    expect(obj.foo[0].bar).toEqual(newValue)
  })
})
