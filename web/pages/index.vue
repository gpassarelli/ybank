<template>
  <div class="d-flex align-items-center min-vh-100">
    <LoginForm />
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator'
    import LoginForm from '~/components/auth/LoginForm.vue'

    @Component({
        components: {
            LoginForm
        }
    })
    export default class Index extends Vue {}
</script>
