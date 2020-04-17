import initState, { TransactionsState } from '~/store/transactions/state'
import { mockTransaction, mockTransactionsState } from '~/store/transactions/__mocks__/transactions.mock'
import { Transaction } from '~/lib/ybank/models'
import mutations from '~/store/transactions/mutations'
import {
  ADD_TRANSACTION, RESET_FORM,
  RESET_STATE, SET_FORM,
  SET_FORM_ERROR,
  SET_FORM_SUCCESS,
  SET_TRANSACTIONS
} from '~/store/transactions/mutations-types'

let state: TransactionsState

describe('Transaction mutations', () => {
  beforeEach(() => {
    state = mockTransactionsState()
  })
  describe(SET_TRANSACTIONS, () => {
    const newTransaction: Transaction = mockTransaction()
    const transactionsList:Transaction[] = [newTransaction, newTransaction, newTransaction, newTransaction, newTransaction]
    test('works', () => {
      mutations[SET_TRANSACTIONS](state, transactionsList)
      expect(state.list).toBe(transactionsList)
    })
  })
  describe(ADD_TRANSACTION, () => {
    const newTransaction: Transaction = mockTransaction()
    test('works', () => {
      mutations[ADD_TRANSACTION](state, newTransaction)
      expect(state.list).toContain(newTransaction)
    })
  })
  describe(RESET_FORM, () => {
    test('works', () => {
      mutations[RESET_FORM](state)
      expect(state.form).toMatchObject({})
    })
  })
  describe(SET_FORM, () => {
    const transactionForm: {} = {}
    test('works', () => {
      mutations[SET_FORM](state, transactionForm)
      expect(state.form).toMatchObject(transactionForm)
      expect(state.formStatus).toBe('processing')
    })
  })
  describe(SET_FORM_SUCCESS, () => {
    test('works', () => {
      mutations[SET_FORM_SUCCESS](state)
      expect(state.formStatus).toBe('success')
    })
  })
  describe(SET_FORM_ERROR, () => {
    test('works', () => {
      mutations[SET_FORM_ERROR](state)
      expect(state.formStatus).toBe('error')
    })
  })
  describe(RESET_STATE, () => {
    test('works', () => {
      mutations[RESET_STATE](state)
      expect(state).toEqual(initState())
    })
  })
})
