import { Transaction } from '~/lib/ybank/models'
import { MOCK_TRANSACTION_PROPS, mockTransaction } from '~/lib/ybank/models/__mocks__/transaction'

describe('Transaction', () => {
  let transaction: Transaction

  beforeEach(() => {
    transaction = mockTransaction()
  })

  test('initializes with correct props', () => {
    expect(transaction.uuid).toBe(MOCK_TRANSACTION_PROPS.uuid)
    expect(transaction.fromAccountId).toBe(MOCK_TRANSACTION_PROPS.fromAccountId)
    expect(transaction.toAccountId).toBe(MOCK_TRANSACTION_PROPS.toAccountId)
    expect(transaction.amount).toBe(MOCK_TRANSACTION_PROPS.amount)
    expect(transaction.details).toBe(MOCK_TRANSACTION_PROPS.details)
  })
})
