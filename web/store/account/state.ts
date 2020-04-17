/**
 * State
 */
export const initState = ():AccountState => ({
  id: -1,
  name: '',
  currency: '',
  balance: 0
})

export default initState

/**
 * TS
 */
export interface AccountState {
  id: number;
  name: string;
  currency: string ;
  balance: number;
}
