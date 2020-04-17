import { TransactionsState } from '~/store/transactions/state'
import { mockTransactionsState } from '~/store/transactions/__mocks__/transactions.mock'
import { getForm, getFormStatus, getTransactions, isProcessingForm } from '~/store/transactions/getters-types'
import getters from '~/store/transactions/getters'

let state: TransactionsState

describe('Transactions getters', () => {
  beforeEach(() => {
    state = mockTransactionsState()
  })

  describe(getTransactions, () => {
    test('works', () => {
      const transactionsList = getters[getTransactions](state)
      expect(transactionsList).toEqual([])
    })
  })
  describe(getForm, () => {
    test('works', () => {
      const transactionForm = getters[getForm](state)
      expect(transactionForm).toEqual({})
    })
  })
  describe(getFormStatus, () => {
    test('works', () => {
      const formStatus = getters[getFormStatus](state)
      expect(formStatus).toBeNull()
    })
  })
  describe(isProcessingForm, () => {
    test('works', () => {
      const isProcessing = getters[isProcessingForm](state)
      expect(isProcessing).toBeFalsy()
    })
  })
})
