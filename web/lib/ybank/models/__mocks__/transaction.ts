import { Transaction } from '~/lib/ybank/models'

/**
 * Props form mock transaction
 */
export const MOCK_TRANSACTION_PROPS: Transaction = {
  uuid: 'd5e63d0e-9ab7-494a-bc52-e4ab3eed5e60',
  fromAccountId: 1,
  toAccountId: 2,
  amount: 100,
  details: 'Mocked Transaction'
}

/**
 * mockTransaction factory
 * @see MOCK_TRANSACTION_PROPS
 */
export const mockTransaction = (): Transaction => new Transaction(MOCK_TRANSACTION_PROPS)
