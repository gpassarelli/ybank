import { Account } from '../Account'
import { MOCK_ACCOUNT_PROPS, mockAccount } from '~/lib/ybank/models/__mocks__/account'
import { mockTransaction } from '~/lib/ybank/models/__mocks__/transaction'

describe('Account', () => {
  let account: Account

  beforeEach(() => {
    account = mockAccount()
  })
  test('initializes with props', () => {
    expect(account.id).toBe(MOCK_ACCOUNT_PROPS.id)
    expect(account.name).toBe(MOCK_ACCOUNT_PROPS.name)
    expect(account.currency).toBe(MOCK_ACCOUNT_PROPS.currency)
    expect(account.balance).toBe(MOCK_ACCOUNT_PROPS.balance)
  })
  test('increaseBalance', () => {
    const initialBalance = account.balance
    const amountToBeAdded = 10
    const newBalance = initialBalance + amountToBeAdded
    account.increaseBalance(amountToBeAdded)
    expect(account.balance).toBe(newBalance)
  })
  test('decreaseBalance', () => {
    const initialBalance = account.balance
    const amountToBeAdded = 10
    const newBalance = initialBalance - amountToBeAdded
    account.decreaseBalance(amountToBeAdded)
    expect(account.balance).toBe(newBalance)
  })

  test('hasBalanceForTransaction', () => {
    const transaction = mockTransaction()
    account.balance = 1000
    transaction.amount = 100
    expect(account.hasBalanceForTransaction(transaction)).toBeTruthy()
    account.balance = 0
    transaction.amount = 100
    expect(account.hasBalanceForTransaction(transaction)).toBeFalsy()
  })
})
