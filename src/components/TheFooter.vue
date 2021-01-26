<template>
  <v-footer
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="path in $options.Paths"
        :key="path.id"
        text
        rounded
        class="my-2"
        :href="path.url"
      >
        {{ path.name }}
      </v-btn>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>TO-DO-LIST, Temnikov S. (c)</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import Paths from '@/layouts/paths/paths.js'
export default {
  Paths
}
</script>
