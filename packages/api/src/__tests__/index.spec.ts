import { formatResponse, formatResponseType } from '../response'

describe('happy path', () => {
  it.skip('should return targetObj type', () => {
    const response = {
      code: 200,
      msg: 'success',
      data: [
        {
          id: 1,
          name: 2,
          age: 3,
          otherArgs1: null,
          otherArgs2: null,
          otherArgs3: null,
          children: [
            {
              pid: 1,
              id: 10,
              name: 21,
              age: 31,
              otherArgs1: null,
              otherArgs2: null,
              otherArgs3: null,
            },
          ],
        },
      ],
    }
    expect(
      formatResponseType(response, {
        id: 'number',
        name: 'string',
        children: [
          {
            pid: 'number',
            id: 'number',
            name: 'string',
            age: 'number',
          },
        ],
      }),
    ).toEqual([
      {
        id: 1,
        name: '2',
        children: [
          {
            pid: 1,
            id: 10,
            name: '21',
            age: 31,
          },
        ],
      },
    ])
  })

  it.skip('should return returnObj', () => {
    const response = {
      code: 200,
      msg: 'success',
      data: [
        {
          id: 1,
          name: 2,
          age: 3,
          otherArgs1: null,
          otherArgs2: null,
          otherArgs3: null,
          children: [
            {
              pid: 1,
              id: 10,
              name: 21,
              age: 31,
              otherArgs1: null,
              otherArgs2: null,
              otherArgs3: null,
            },
          ],
        },
      ],
    }
    expect(
      formatResponse(response, {
        label: 'name',
        value: 'id',
        children: [
          {
            label: 'name',
            value: 'id',
          },
        ],
      }),
    ).toEqual([
      {
        label: 2,
        value: 1,
        children: [
          {
            label: 21,
            value: 10,
          },
        ],
      },
    ])
  })
})
