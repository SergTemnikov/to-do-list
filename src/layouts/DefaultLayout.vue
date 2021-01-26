<template>
  <v-app>
    <v-app-bar app dense> </v-app-bar>

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
