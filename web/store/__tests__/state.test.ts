import { initState } from '../state'

describe('Root state', () => {
  describe('initState', () => {
    test('works', () => {
      const state = initState()
      expect(state).toMatchObject({})
    })
  })
})
