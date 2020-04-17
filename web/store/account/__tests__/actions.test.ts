import { AccountActionContext, fetchAccount, resetState } from '~/store/account/actions-types'
import { AccountState } from '~/store/account/state'
import { RootState } from '~/store/state'
import {mockAccount, mockAccountState} from '~/store/account/__mocks__/account.mock'
import { mockRootState } from '~/store/__mocks__/root.mock'
import actions from '~/store/account/actions'
import { RESET_STATE, SET_ACCOUNT, SET_BALANCE } from '~/store/account/mutation-types'
import $api from '@/lib/ybank/api'
import getters from '~/store/account/getters'

let actionCxt: AccountActionContext
let commit: jest.Mock
let state: AccountState
let rootState: RootState

jest.mock('@/lib/ybank/api')

describe('Account actions', () => {
  beforeEach(() => {
    commit = jest.fn()

    state = mockAccountState()
    rootState = mockRootState()

    actionCxt = {
      state,
      commit,
      dispatch: jest.fn(),
      getters,
      rootGetters: jest.fn(),
      rootState
    }
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('fetchAccount', () => {
    beforeEach(async () => {
      await actions[fetchAccount](actionCxt, { id: 1 })
    })

    test('calls $api.accounts.show()', () => {
      expect($api.accounts.show).toHaveBeenCalledTimes(1)
    })

    test('commits "SET_ACCOUNT" with account from api call', async () => {
      expect(commit).toHaveBeenCalledTimes(1)
      const { data: { data: account } } = await $api.accounts.show(2)
      const setCurrentAccountCommitCall = commit.mock.calls[0]
      expect(setCurrentAccountCommitCall[0]).toBe(SET_ACCOUNT)
      expect(setCurrentAccountCommitCall[1]).toMatchObject(account)
    })
  })

  describe('increaseBalance', () => {
    const increasedAmount = 1
    const initState = mockAccountState()
    beforeEach(() => {
      actionCxt.getters.getAccount = mockAccount()
      actions.increaseBalance(actionCxt, { amount: increasedAmount })
    })
    test('commits "SET_BALANCE" with the updated balance', () => {
      expect(commit).toHaveBeenCalledTimes(1)
      const updatedBalance = initState.balance + increasedAmount
      const setBalanceCommitCall = commit.mock.calls[0]
      expect(setBalanceCommitCall[0]).toBe(SET_BALANCE)
      expect(setBalanceCommitCall[1]).toEqual(updatedBalance)
    })
  })

  describe('decreaseBalance', () => {
    const decreasedAmount = 1
    const initState = mockAccountState()
    beforeEach(() => {
      actionCxt.getters.getAccount = mockAccount()
      actions.decreaseBalance(actionCxt, { amount: decreasedAmount })
    })
    test('commits "SET_BALANCE" with the updated balance', () => {
      expect(commit).toHaveBeenCalledTimes(1)
      const updatedBalance = initState.balance - decreasedAmount
      const setBalanceCommitCall = commit.mock.calls[0]
      expect(setBalanceCommitCall[0]).toBe(SET_BALANCE)
      expect(setBalanceCommitCall[1]).toEqual(updatedBalance)
    })
  })

  describe('reset', () => {
    beforeEach(() => {
      actions[resetState](actionCxt)
    })
    test('commits "RESET_STATE"', () => {
      expect(commit).toHaveBeenCalledTimes(1)
      const resetStateCommitCall = commit.mock.calls[0]
      expect(resetStateCommitCall[0]).toBe(RESET_STATE)
      expect(resetStateCommitCall[1]).toBeUndefined()
    })
  })
})
