import initState, { AccountState } from '~/store/account/state'
import { mockAccount, mockAccountState } from '~/store/account/__mocks__/account.mock'
import mutations from '~/store/account/mutations'
import { RESET_STATE, SET_ACCOUNT, SET_BALANCE } from '~/store/account/mutation-types'
import { Account } from '~/lib/ybank/models'

let state: AccountState

describe('Account mutations', () => {
  beforeEach(() => {
    state = mockAccountState()
  })

  describe(SET_ACCOUNT, () => {
    const newAccount: Account = mockAccount()
    test('works', () => {
      mutations[SET_ACCOUNT](state, newAccount)
      expect(state).toEqual(newAccount)
    })
  })
  describe(RESET_STATE, () => {
    test('works', () => {
      mutations[RESET_STATE](state)
      expect(state).toEqual(initState())
    })
  })
  describe(SET_BALANCE, () => {
    test('works', () => {
      const newBalance = 5000
      mutations[SET_BALANCE](state, newBalance)
      expect(state.balance).toEqual(newBalance)
    })
  })
})
