import { Account, Transaction } from '~/lib/ybank/models'

export default ($axios:any) => ({
  show (id: number): Promise<{data:{data:Account}}> {
    return $axios.get(`/accounts/${id}`)
  },
  getTransactions (id: number): Promise<{data:{data:Transaction[], links:{}, meta:{}}}> {
    return $axios.get(`/accounts/${id}/transactions`)
  },
  storeTransaction (payload:Transaction): Promise<{data:{data:Transaction}}> {
    const { fromAccountId } = payload
    payload.fromAccountId = Number(payload.fromAccountId)
    payload.toAccountId = Number(payload.toAccountId)
    payload.amount = Number(payload.amount)
    return $axios.post(`/accounts/${fromAccountId}/transactions`, payload)
  }
})
