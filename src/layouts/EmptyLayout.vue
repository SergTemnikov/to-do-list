<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>

  <TheFooter app dense/>
  </v-app>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'
export default {
  components: {
    TheFooter
  }
}
</script>

<style scoped>
* {
  background-color: #E5F0FF;
}
</style>
