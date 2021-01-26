<template>
<div>
    <v-app-bar
      color="#052555"
      dark
      app
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn type="submit" color="#F6522E">Выйти</v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4">
          <v-list-item href="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Главная</v-list-item-title>
          </v-list-item>

          <v-list-item href="/dashboard">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Доска</v-list-item-title>
          </v-list-item>

          <v-list-item href="/sign-in">
            <v-list-item-icon>
              <v-icon>mdi-account-arrow-right</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Вход</v-list-item-title>
          </v-list-item>

          <v-list-item href="/sign-up">
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Регистрация</v-list-item-title>
          </v-list-item>

          <v-list-item href="/about">
            <v-list-item-icon>
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>О нас</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
import Paths from '@/layouts/paths/paths.js'
export default {
  name: 'AppBar',
  Paths,
  data () {
    return {
      drawer: false,
      group: null
    }
  },
  computed: {
    pageTitle () {
      return this.$route.meta.name
    }
  }
}
</script>
