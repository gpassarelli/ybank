<template functional>
  <b-card :header="'Welcome, ' + props.account.name" class="mt-3 AccountHeader">
    <b-card-text>
      <div>
        <p><strong>Account:</strong> <b-badge>{{ props.account.id }}</b-badge></p>
        <p><strong>Balance:</strong> <b-badge> {{ props.account.balance | formatAmount(props.account.currency) }}</b-badge></p>
      </div>
    </b-card-text>
    <slot name="footer"></slot>
  </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Account } from '~/lib/ybank/models'

@Component
export default class AccountHeader extends Vue {
  @Prop({ type: Account, required: true, default: () => new Account() })
  account!: Account
}
</script>
