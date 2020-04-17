import { mockAccount, mockAccountState } from '~/store/account/__mocks__/account.mock'
import { AccountState } from '~/store/account/state'
import getters from '~/store/account/getters'
import { getAccount, getBalance, getCurrency, getId } from '~/store/account/getters-types'
import { Account } from '@/lib/ybank/models'
let state: AccountState
let mockedAccount: Account

describe('Account getters', () => {
  beforeEach(() => {
    state = mockAccountState()
    mockedAccount = mockAccount()
  })
  describe('getAccount', () => {
    test('works', () => {
      const account:Account = getters[getAccount](state)
      expect(account).toMatchObject(mockedAccount)
    })
  })
  describe('getId', () => {
    test('works (', () => {
      const id:number = getters[getId](state)
      expect(id).toEqual(mockedAccount.id)
    })
  })
  describe('getBalance', () => {
    test('works (', () => {
      const balance:number = getters[getBalance](state)
      expect(balance).toEqual(mockedAccount.balance)
    })
  })
  describe('getCurrency', () => {
    test('works (', () => {
      const currency:string = getters[getCurrency](state)
      expect(currency).toEqual(mockedAccount.currency)
    })
  })
})
