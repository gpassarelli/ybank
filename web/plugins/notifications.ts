import { Plugin } from '@nuxt/types'
import Vue from 'vue'
import { ToastPlugin } from 'bootstrap-vue'
Vue.use(ToastPlugin)

declare module 'vue/types/vue' {
  interface Vue {
    $showNotification(message: string, type:string): void
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $showNotification(message: string, type:string): void
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $showNotification(message: string, type:string): void
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notificationPlugin: Plugin = (context, inject) => {
  inject('showNotification', (message: string, type:string) => {
    const vm = new Vue()
    vm.$bvToast.toast(message, {
      variant: type,
      title: 'Ybank',
      toaster: 'b-toaster-top-center',
      solid: true
    })
  })
}

export default notificationPlugin
