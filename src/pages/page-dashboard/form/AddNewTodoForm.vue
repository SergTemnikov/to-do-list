<template>
  <v-card width="500" class="mx-auto">
    <v-card-text>
      <v-card-title class="mx-auto">
        <h2>Новая задача</h2>
      </v-card-title>
      <form>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          label="Название..."
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-select
          v-model="select"
          :items="categories"
          :error-messages="selectErrors"
          label="Выберите категорию..."
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        ></v-select>
        <v-textarea
          v-model="description"
          :error-messages="descriptionErrors"
          label="Описание задачи..."
          required
          @input="$v.description.$touch()"
          @blur="$v.description.$touch()"
        ></v-textarea>
        <v-spacer/>
        <v-btn
          class="mr-4"
          @click="submit"
        >
          Добавить
        </v-btn>
        <v-btn @click="clear">
          Очистить
        </v-btn>
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, minLength: minLength(10) },
    description: { required, minLength: minLength(10) },
    select: { required }
  },
  data: () => ({
    name: null,
    description: null,
    select: null,
    categories: [
      'Дом',
      'Работа',
      'Учеба',
      'Личное'
    ]
  }),
  computed: {
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Нужно выбрать категорию')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.required && errors.push('Нужно ввести название')
      return errors
    },
    descriptionErrors () {
      const errors = []
      if (!this.$v.description.$dirty) return errors
      !this.$v.description.required && errors.push('Нужно заполнить описание задачи')
      return errors
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    }
  }
}
</script>
