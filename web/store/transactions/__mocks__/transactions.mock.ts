import { TransactionsState } from '~/store/transactions/state'
import * as modelMocks from '@/lib/ybank/models/__mocks__/transaction'
/**
 * Props form mock transaction
 */
export const MOCK_TRANSACTION_PROPS = modelMocks.MOCK_TRANSACTION_PROPS

/**
 * mockAccount factory
 * @see MOCK_TRANSACTION_PROPS
 */
export const mockTransaction = () => modelMocks.mockTransaction()

/**
 * mockTransactionsState factory
 */
export const mockTransactionsState = (): TransactionsState => ({
  form: {},
  formStatus: null,
  list: []
})
