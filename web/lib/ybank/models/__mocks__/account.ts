import { Account, AccountProps } from '~/lib/ybank/models'

/**
 * Props form mock account
 */
export const MOCK_ACCOUNT_PROPS: AccountProps = {
  id: 1,
  name: 'John Doe',
  currency: 'USD',
  balance: 1000
}

/**
 * mockAccount factory
 * @see MOCK_ACCOUNT_PROPS
 */
export const mockAccount = (): Account => new Account(MOCK_ACCOUNT_PROPS)
