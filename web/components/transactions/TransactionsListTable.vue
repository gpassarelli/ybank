<template>
  <div class="TransactionsListTable" v-if="transactions">
    <b-table
      :items="transactions"
      :fields="fields"
      hover
      striped
      sticky-header
      head-variant="light"
    >
      <template v-slot:cell(amount)="data">
        {{ data.value | formatAmount(currency) }}
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Transaction } from '@/lib/ybank/models'

@Component({})
export default class TransactionsListTable extends Vue {
    @Prop({ type: Array, required: true })
    transactions!: Transaction[];

    @Prop({ type: String })
    currency!: '';

    fields:string[] = ['fromAccountId', 'toAccountId', 'details', 'amount']
}
</script>
<style>
  .TransactionsListTable {
    margin-bottom: 0;
  }
</style>
