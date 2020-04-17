<template>
  <b-button :disabled="processing" v-bind="{...$attrs, ...$props}" class="AsyncActionButton" v-on="$listeners">
    <slot />
    <span v-if="processing" class="AsyncActionsButton__loader">
      <b-spinner small />
      <span class="sr-only">Processing...</span>
    </span>
  </b-button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({})
export default class AsyncActionButton extends Vue {
    @Prop({ default: false })
    processing!: boolean
}
</script>
<style>
  .AsyncActionsButton__loader {
      margin-left: 5px;
  }
</style>
