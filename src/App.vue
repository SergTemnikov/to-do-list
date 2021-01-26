<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import Layouts from '@/layouts/index.js'
export default {
  name: 'App',
  data () {
    return {}
  },
  computed: {
    layout () {
      return Layouts[this.$route.meta.layout]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap');

</style>
