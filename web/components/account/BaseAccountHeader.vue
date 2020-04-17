<template functional>
  <b-card :header="'Welcome, ' + props.account.name" class="mt-3 AccountHeader">
      <b-container>
        <b-row>
          <b-col>
            <strong>Account:</strong> <code>{{ props.account.id }}</code>
          </b-col>
          <b-col class="text-right">
            <strong>Balance:</strong>
            <code>
              {{ props.account.balance | formatAmount(props.account.currency) }}
            </code>
          </b-col>
        </b-row>
      </b-container>
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
