import { resetAllStates, RootActionContext } from '~/store/actions-types'
import { RootState } from '~/store/state'
import { mockRootState } from '~/store/__mocks__/root.mock'
import actions from '~/store/actions'
import { resetState as resetTransactionsState } from '~/store/transactions/action-types'
import { resetState as resetAccountState } from '~/store/account/actions-types'

let actionCxt: RootActionContext
let commit: jest.Mock
let dispatch: jest.Mock
let state: RootState
let rootState: RootState

describe('Root actions', () => {
  beforeEach(() => {
    commit = jest.fn()
    dispatch = jest.fn()
    state = mockRootState()
    rootState = mockRootState()

    actionCxt = {
      state,
      commit,
      dispatch,
      getters: jest.fn(),
      rootGetters: jest.fn(),
      rootState
    }
  })

  describe('resetAll', () => {
    beforeEach(() => {
      actions[resetAllStates](actionCxt)
    })
    test('dispatches "transactions/resetState" action', () => {
      expect(dispatch).toHaveBeenCalled()
      const resetAllDispatchesCall = dispatch.mock.calls[0]
      expect(resetAllDispatchesCall[0]).toEqual(`transactions/${resetTransactionsState}`)
    })
    test('dispatches "account/resetState" action', () => {
      expect(dispatch).toHaveBeenCalled()
      const resetAllDispatchesCall = dispatch.mock.calls[1]
      expect(resetAllDispatchesCall[0]).toEqual(`account/${resetAccountState}`)
    })
    test('dispatches all required actions', () => {
      expect(dispatch).toHaveBeenCalledTimes(2)
    })
  })
})
