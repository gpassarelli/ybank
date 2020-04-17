/**
 * Transactions
 */
export interface TransactionPropsInterface {
  uuid: string,
  fromAccountId: number,
  toAccountId: number,
  amount: number,
  details?: string,
  createdAt?: string;
}

export interface TransactionInterface extends TransactionPropsInterface {}

export class Transaction implements TransactionInterface {
  public uuid!: string;
  public fromAccountId!: number;
  public toAccountId!: number;
  public amount!: number;
  public details?: string;
  public createdAt?: string;

  public constructor (json:TransactionPropsInterface) {
    if (json) {
      const properties = {
        ...json,
        createdAt: json.createdAt ? new Date(json.createdAt) : null,
        amount: Number(json.amount)
      }

      Object.assign(this, properties)
    }
  }
}
