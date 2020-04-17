import { Account, Transaction } from '~/lib/ybank/models'
/**
 * Dummy Account
 */
export const DUMMY_ACCOUNT: Account = new Account({
  id: 1,
  name: 'John Doe',
  currency: 'USD',
  balance: 1000,
  createdAt: ''
})

export const DUMMY_TRANSACTION_PROPS: Transaction = {
  uuid: 'd5e63d0e-9ab7-494a-bc52-e4ab3eed5e60',
  fromAccountId: 1,
  toAccountId: 2,
  amount: 100,
  details: 'Mocked Transaction',
  createdAt: ''
}

export const DUMMY_TRANSACTIONS_LIST: Transaction[] = [
  new Transaction(DUMMY_TRANSACTION_PROPS),
  new Transaction({ ...DUMMY_TRANSACTION_PROPS, uuid: 'bbddcee3-a907-40b4-b809-d792667f7fee' }),
  new Transaction({ ...DUMMY_TRANSACTION_PROPS, uuid: '6bb14665-26f8-4cfc-b756-6c4ce43a059b' }),
  new Transaction({ ...DUMMY_TRANSACTION_PROPS, uuid: 'b9db5cdd-e0dd-4b71-8bbc-f6208431be93' })
]

export default () => ({
  show: jest.fn().mockImplementation(
    (): Promise<{ data: { data: Account } }> => {
      return new Promise<{ data: { data: Account } }>(resolve => resolve({ data: { data: DUMMY_ACCOUNT } }))
    }
  ),
  getTransactions: jest.fn().mockImplementation(
    (): Promise<{ data: { data: Transaction[] } }> => {
      return new Promise<{ data: { data: Transaction[] } }>(resolve => resolve({ data: { data: DUMMY_TRANSACTIONS_LIST } }))
    }
  ),
  storeTransaction: jest.fn().mockImplementation(
    (): Promise<{ data: { data: Transaction } }> => {
      return new Promise<{ data: { data: Transaction } }>(resolve => resolve({ data: { data: new Transaction(DUMMY_TRANSACTION_PROPS) } }))
    }
  )
})
