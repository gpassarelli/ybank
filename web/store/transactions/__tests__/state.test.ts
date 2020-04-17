import { initState } from '../state'

describe('Transactions state', () => {
  describe('initState', () => {
    test('works', () => {
      const state = initState()
      expect(state).toEqual({
        list: [],
        form: {},
        formStatus: null
      })
    })
  })
})
