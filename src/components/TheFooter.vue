<template>
  <v-footer
    app
    padless
    color="#052555"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="path in $options.Paths"
        :key="path.id"
        text
        color="white"
        rounded
        class="my-2"
        :href="path.url"
      >
        {{ path.name }}
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
import Paths from '@/layouts/paths/paths.js'
export default {
  Paths
}
</script>
