<template>
  <div class="Account_id">
    <b-container>
      <b-overlay :show="isLoading" rounded="sm">
        <AccountHeader v-show="account" :account="account">
          <template v-slot:footer>
            <b-button size="sm" variant="success" @click="toggleAddTransactionForm">
              New payment
            </b-button>
            <LogoutButton class="float-right"/>
          </template>
        </AccountHeader>
      </b-overlay>
      <hr>
      <div v-show="showAddTransactionForm" class="mt-3">
        <b-card header="New Payment">
          <AddTransactionForm />
        </b-card>
        <hr>
      </div>
      <b-overlay :show="isLoading" rounded="sm">
        <b-card class="mt-3" header="Payment History" no-body>
          <TransactionsListTable :transactions="transactions" :currency="account.currency" />
        </b-card>
      </b-overlay>
    </b-container>
  </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator'
    import TransactionsListTable from '~/components/transactions/TransactionsListTable.vue'
    import AddTransactionForm from '~/components/transactions/AddTransactionForm.vue'
    import LogoutButton from '~/components/auth/LogoutButton.vue'
    import AccountHeader from '~/components/account/BaseAccountHeader.vue'
    import { accountModule } from '~/store/account'
    import { fetchAccount } from '~/store/account/actions-types'
    import { getAccount } from '~/store/account/getters-types'
    import { transactionsModule } from '~/store/transactions'
    import { Account, Transaction } from '~/lib/ybank/models'
    import { getTransactions } from '~/store/transactions/getters-types'

    @Component({
        components: {
            TransactionsListTable,
            LogoutButton,
            AccountHeader,
            AddTransactionForm
        }
    })
    export default class MyAccount extends Vue {
        isLoading:boolean = true
        showAddTransactionForm:boolean = false

        @accountModule.Action(fetchAccount)
        private fetchAccount!: (payload:{id:number}) => Promise<void>;

        @transactionsModule.Action('fetchTransactions')
        private fetchTransactions!: (payload:{id:number}) => Promise<void>

        @accountModule.Getter(getAccount)
        public account!: Account;

        @transactionsModule.Getter(getTransactions)
        public transactions!: Transaction[];

        mounted () {
            const { id: idParam } = this.$route.params
            const id = Number(idParam)

            this.fetchAccount({ id }).then(() => {
                this.fetchTransactions({ id }).then(() => {
                    this.isLoading = false
                })
            })
        }

        toggleAddTransactionForm () {
            this.showAddTransactionForm = !this.showAddTransactionForm
        }
    }
</script>
