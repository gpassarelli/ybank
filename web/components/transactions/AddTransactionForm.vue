<template>
  <div class="AddTransactionForm">
    <TransactionForm ref="payment-form" button="Make Transaction" @submit="handleSubmit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TransactionForm from './TransactionForm.vue'
import { transactionsModule } from '~/store/transactions'
import { makeTransaction } from '~/store/transactions/action-types'
import { Transaction } from '~/lib/ybank/models'

@Component({
  components: {
    TransactionForm
  }
})
export default class AddTransactionForm extends Vue {
  @transactionsModule.Action(makeTransaction)
  private makeTransaction!: (payload:{transaction:Transaction}) => Promise<void>

  handleSubmit (transaction:Transaction) {
    this.makeTransaction({ transaction })
      .then(() => {
        this.$showNotification('Transaction Made', 'success')
      })
      .catch((error) => {
        this.$showNotification(error.message, 'danger')
      })
  }
}
</script>
