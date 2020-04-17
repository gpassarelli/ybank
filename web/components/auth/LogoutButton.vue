<template>
  <b-button
    class="LogoutButton"
    variant="danger"
    size="sm"
    @click="handleClick"
  >
    Logout
  </b-button>
</template>

<script lang="ts">
import { Component, Vue, Action } from 'nuxt-property-decorator'
import { resetAllStates } from '~/store/actions-types'

@Component
export default class LogoutButton extends Vue {
    @Action(resetAllStates)
    logout!: () => Promise<void>

    handleClick () {
      this.$router.replace({ path: '/' }).then(() => {
          this.logout()
      })
    }
}
</script>
