<template>
  <v-card
    elevation="2"
    width="400"
    class="mx-auto mt-8">
    <v-card-text>
      <form @submit.prevent="submit" novalidate>
      <v-card-title>
      <h1 class="display-1">Вход</h1>
      </v-card-title>
      <v-card-text>
        <v-text-field
          type="email"
          prepend-icon="mdi-account-circle"
          label="Ваша почта"
          v-model="email"
          :error-messages="emailErrors"
        />
        <v-text-field
          :type="isPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="isPassword ? 'mdi-eye' : 'mdi-eye-off' "
          @click:append="togglePasswordIcon"
          label="Ваш пароль"
          :error-messages="passwordErrors"
          v-model="password"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn type="submit" color="#052555" text>Вход</v-btn>
      </v-card-actions>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  data () {
    return {
      email: null,
      password: null,
      isPassword: false
    }
  },
  methods: {
    submit () {
      this.$v.email.$touch()
      this.$v.password.$touch()
      // this.clearForm()
    },
    togglePasswordIcon () {
      this.isPassword = !this.isPassword
    },
    clearForm () {
      this.$v.$reset()
      this.email = null
      this.password = null
    }
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Неверно указана почта')
      !this.$v.email.required && errors.push('Необходимо ввести почу')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Необходимо ввести пароль')
      !this.$v.password.minLength && errors.push('Пароль должен быть не менее 8 символов')
      return errors
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  }
}
</script>
