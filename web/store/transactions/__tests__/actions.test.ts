import {
  fetchTransactions,
  makeTransaction,
  resetState,
  TransactionsActionContext
} from '~/store/transactions/action-types'
import { TransactionsState } from '~/store/transactions/state'
import { RootState } from '~/store/state'
import { mockTransaction, mockTransactionsState } from '~/store/transactions/__mocks__/transactions.mock'
import { mockRootState } from '~/store/__mocks__/root.mock'
import getters from '~/store/transactions/getters'
import actions from '~/store/transactions/actions'
import $api from '@/lib/ybank/api'
import {
  ADD_TRANSACTION,
  RESET_FORM, RESET_STATE,
  SET_FORM,
  SET_FORM_SUCCESS,
  SET_TRANSACTIONS
} from '~/store/transactions/mutations-types'
import { decreaseBalance } from '~/store/account/actions-types'
import {getAccount} from '~/store/account/getters-types'
import {mockAccount} from "~/store/account/__mocks__/account.mock";

let actionCxt: TransactionsActionContext
let dispatch: jest.Mock
let commit: jest.Mock
let state: TransactionsState
let rootState: RootState

jest.mock('@/lib/ybank/api')

describe('Transactions actions', () => {
  beforeEach(() => {
    commit = jest.fn()
    dispatch = jest.fn()
    state = mockTransactionsState()
    rootState = mockRootState()

    actionCxt = {
      state,
      commit,
      dispatch,
      getters,
      rootGetters: jest.fn(),
      rootState
    }
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('fetchTransactions', () => {
    beforeEach(async () => {
      await actions[fetchTransactions](actionCxt, { id: 1 })
    })

    test('calls api.accounts.getTransactions()', () => {
      expect($api.accounts.getTransactions).toHaveBeenCalledTimes(1)
    })

    test('commits "SET_TRANSACTIONS" with account from api call', async () => {
      const setTransactionsCommitCall = commit.mock.calls[0]
      const { data: { data: transactionsList } } = await $api.accounts.getTransactions(2)
      expect(setTransactionsCommitCall[0]).toEqual(SET_TRANSACTIONS)
      expect(setTransactionsCommitCall[1]).toEqual(transactionsList)
    })
  })

  describe('addTransaction succesfully', () => {
    const mockedTransaction = mockTransaction()
    beforeEach(() => {
      actionCxt.rootGetters[`account/${getAccount}`] = mockAccount()
      actions[makeTransaction](actionCxt, { transaction: mockedTransaction })
    })
    test('calls api.accounts.storeTransaction()', () => {
      expect($api.accounts.storeTransaction).toHaveBeenCalledTimes(1)
    })
    test('commits "SET_FORM" with the values on the form before sending to the server', () => {
      const setFormCommitCall = commit.mock.calls[0]
      expect(setFormCommitCall[0]).toEqual(SET_FORM)
      expect(setFormCommitCall[1]).toEqual(mockedTransaction)
    })
    test('commits "ADD_TRANSACTION" with the created transaction', () => {
      const addTransactionCommitCall = commit.mock.calls[1]
      expect(addTransactionCommitCall[0]).toEqual(ADD_TRANSACTION)
      expect(addTransactionCommitCall[1]).toEqual(mockedTransaction)
    })
    test('dispatch "decreaseBalance" with the amount of the transaction', () => {
      const dispacthDescreaseBalanceCall = dispatch.mock.calls[0]
      expect(dispacthDescreaseBalanceCall[0]).toEqual(decreaseBalance)
      expect(dispacthDescreaseBalanceCall[1]).toEqual(mockedTransaction.amount)
    })
    test('commits "SET_FORM_SUCCESS" with the created transactions', () => {
      const setFormSuccessCommitCall = commit.mock.calls[2]
      expect(setFormSuccessCommitCall[0]).toEqual(SET_FORM_SUCCESS)
      expect(setFormSuccessCommitCall[1]).toBeUndefined()
    })
    test('commits "RESET_FORM" with the created transactions', () => {
      const resetFormCommitCall = commit.mock.calls[3]
      expect(resetFormCommitCall[0]).toEqual(RESET_FORM)
      expect(resetFormCommitCall[1]).toBeUndefined()
    })
  })

  describe('addTransaction without enought balance', () => {
    const mockedTransaction = mockTransaction()
    beforeEach(() => {
      try {
        const account = mockAccount();
        account.balance = 0
        actionCxt.rootGetters[`account/${getAccount}`] = account
        actions[makeTransaction](actionCxt, { transaction: mockedTransaction })
      } catch (e) {}
    })
    it('does not call api.accounts.storeTransaction()', () => {
      expect($api.accounts.storeTransaction).toHaveBeenCalledTimes(0)
    })
    test('throws an error', async () => {
      await expect(actions[makeTransaction](actionCxt, { transaction: mockedTransaction })).rejects.toThrow('Insufficient Funds')
    })
  })

  describe('reset', () => {
    beforeEach(() => {
      actions[resetState](actionCxt)
    })
    test('commits "resetState"', () => {
      expect(commit).toHaveBeenCalledTimes(1)
      const resetStateCommitCall = commit.mock.calls[0]
      expect(resetStateCommitCall[0]).toEqual(RESET_STATE)
    })
  })
})
