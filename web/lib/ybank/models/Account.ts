/**
 * Account
 */
import { Transaction } from '~/lib/ybank/models/Transaction'

export interface AccountProps {
  id: number;
  name: string;
  currency: string;
  balance: number;
  createdAt?: string;
}
export interface AccountMethodsInterface {
  hasBalanceForTransaction:(transaction:Transaction) => boolean
  increaseBalance:(amount:number) => Account
  decreaseBalance:(amount:number) => Account
  addTransaction:(transaction:Transaction) => void
}
export interface AccountInterface extends AccountProps, AccountMethodsInterface {}

export class Account implements AccountInterface {
  public id!: number;
  public name!: string;
  public currency!:string;
  public balance:number = 0;
  public createdAt?: string;

  public constructor (json?:AccountProps) {
    if (json) {
      const properties = {
        ...json,
        createdAt: json.createdAt ? new Date(json.createdAt) : null,
        balance: json.balance ? Number(json.balance) : 0
      }
      Object.assign(this, properties)
    }
  }

  /**
   * Checks if account has enough balance for a transaction
   * @param transaction
   */
  public hasBalanceForTransaction (transaction:Transaction): boolean {
    return this.balance >= transaction.amount
  }

  /**
   * Increase the account balance by a specific amount
   * @param amount
   */
  public increaseBalance (amount:number): Account {
    this.balance += amount

    return this
  }

  /**
   * Decrease the account balance by a specific amount
   * @param amount
   */
  public decreaseBalance (amount:number): Account {
    this.balance -= amount

    return this
  }

  /**
   * Decrease the account balance by a specific amount
   * @param transaction
   */
  public addTransaction (transaction:Transaction): void {
    if (!this.hasBalanceForTransaction(transaction)) {
      throw new Error('Insufficient Funds')
    }
  }
}
