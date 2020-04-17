import { formatAmount } from './filters'

describe('formatAmount', () => {
  test('integer with currency', () => {
    expect(formatAmount(1000, 'EUR')).toEqual('€1,000.00')
  })

  test('integer without currency', () => {
    expect(formatAmount(1000)).toEqual('1,000')
  })

  test('decimal with currency', () => {
    expect(formatAmount(1234.56, 'EUR')).toEqual('€1,234.56')
  })

  test('integer without currency', () => {
    expect(formatAmount(1234.56)).toEqual('1,234.56')
  })
})
