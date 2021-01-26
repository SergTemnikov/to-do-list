<template>
  <v-card
    elevation="2"
    width="400"
    class="mx-auto mt-8">
    <v-card-text>
      <v-card-title>
      <h1 class="display-1">Регистрация</h1>
    </v-card-title>
    <v-card-text>
      <v-text-field
        prepend-icon="mdi-account-circle"
        label="Ваша почта" />
      <v-text-field
        prepend-icon="mdi-lock"
        append-icon="mdi-eye-off"
        label="Ваш пароль" />
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#052555" text>Зарегистрироваться</v-btn>
    </v-card-actions>
    </v-card-text>
  </v-card>
</template>
