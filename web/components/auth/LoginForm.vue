<template>
  <b-container class="LoginForm">
    <b-row class="justify-content-md-center h-100" align-v="center">
      <b-col col sm="4">
        <b-card>
          <b-form @submit.prevent="handleSubmit()">
            <b-form-group
              id="input-group-2"
              label="Enter your account ID:"
              label-for="input-2"
            >
              <b-form-input
                id="input"
                v-model="accountId"
                type="number"
                required
                placeholder="Account ID"
              />
            </b-form-group>
            <AsyncActionButton block variant="primary" :processing.sync="isLoading" type="submit">
              Login
            </AsyncActionButton>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import AsyncActionButton from '../common/AsyncActionButton.vue'
import { accountModule } from '~/store/account'
import { fetchAccount } from '~/store/account/actions-types'

@Component({
  components: {
    AsyncActionButton
  }
})
export default class LoginForm extends Vue {
  accountId:number = 1
  isLoading:boolean = false

  @accountModule.Action(fetchAccount)
  private fetchAccount!: (payload:{id:number}) => Promise<void>

  handleSubmit () {
    this.isLoading = true
    const { accountId: id } = this

    this.fetchAccount({ id })
      .then(() => {
        this.$router.replace({ path: `/accounts/${id}` })
      })
      .catch((error) => {
        this.$showNotification(error, 'danger')
      })
  }
}
</script>
