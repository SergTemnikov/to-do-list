<template>
  <v-app>
    <AppBar />
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
import AppBar from '@/components/AppBar.vue'
export default {
  components: {
    TheFooter,
    AppBar
  }
}
</script>

<style scoped>
* {
  background-color: #E5F0FF;
}
</style>
