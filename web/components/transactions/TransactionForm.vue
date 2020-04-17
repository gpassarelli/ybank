<template>
  <div class="TransactionForm">
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="input-group-1" label="To:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.toAccountId"
          size="sm"
          type="number"
          required
          :disabled="isProcessing"
          placeholder="Destination ID"
        />
      </b-form-group>
      <b-form-group id="input-group-2" label="Amount:" label-for="input-2">
        <b-input-group :prepend="symbol" size="sm">
          <b-form-input
            id="input-2"
            v-model="form.amount"
            type="number"
            :max="balance"
            :min="0"
            required
            :disabled="isProcessing"
            placeholder="Amount"
          />
        </b-input-group>
      </b-form-group>
      <b-form-group id="input-group-3" label="Details:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.details"
          size="sm"
          required
          :disabled="isProcessing"
          placeholder="Transaction details"
        />
      </b-form-group>
      <AsyncActionButton block variant="primary" :processing.sync="isProcessing" type="submit">
        {{ button }}
      </AsyncActionButton>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import AsyncActionButton from '../common/AsyncActionButton.vue'
import { accountModule } from '@/store/account'
import { getBalance, getCurrency, getId } from '~/store/account/getters-types'
import { transactionsModule } from '~/store/transactions'
import { getForm, isProcessingForm } from '~/store/transactions/getters-types'

@Component({
  components: {
    AsyncActionButton
  }
})
export default class TransactionForm extends Vue {
  @Prop()
  button!: string

  @transactionsModule.Getter(getForm)
  public stateForm!: {};

  @transactionsModule.Getter(isProcessingForm)
  public isProcessing!: boolean;

  @accountModule.Getter(getId)
  public accountId!: number;

  @accountModule.Getter(getBalance)
  public balance!: number;

  @accountModule.Getter(getCurrency)
  public currency!: string;

  public form:{ toAccountId?:number, amount?:number, details?:string } = {}

  handleSubmit () {
    const { form } = this
    const fromAccountId = this.accountId
    const toAccountId = Number(this.accountId)

    if (fromAccountId === toAccountId) {
      this.$showNotification('Select a different account', 'danger')
      return false
    }

    const transaction = { ...form, fromAccountId }
    this.$emit('submit', transaction)
  }

  get symbol () {
    if (!this.currency) { return '' }
    return (0).toLocaleString(
      'en',
      {
        style: 'currency',
        currency: this.currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }
    ).replace(/\d/g, '').trim()
  }
}
</script>
