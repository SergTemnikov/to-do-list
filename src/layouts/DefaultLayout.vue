<template>
  <v-app>
    <v-app-bar app> </v-app-bar>

    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>
