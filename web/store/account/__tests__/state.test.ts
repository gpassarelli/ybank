import { initState } from '../state'

describe('Account state', () => {
  describe('initState', () => {
    test('works', () => {
      const state = initState()
      expect(state).toEqual({
        id: -1,
        name: '',
        currency: '',
        balance: 0
      })
    })
  })
})
