import { AccountState } from '../state'
import * as modelMocks from '@/lib/ybank/models/__mocks__/account'
/**
 * Props form mock account
 */
export const MOCK_ACCOUNT_PROPS = modelMocks.MOCK_ACCOUNT_PROPS

/**
 * mockAccount factory
 * @see MOCK_ACCOUNT_PROPS
 */
export const mockAccount = () => modelMocks.mockAccount()

/**
 * mockAccountState factory
 */
export const mockAccountState = (): AccountState => ({
  ...MOCK_ACCOUNT_PROPS
})
