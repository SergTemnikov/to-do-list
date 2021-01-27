<template>
  <section>
    <v-list-item>
      <v-btn
        fixed
        right
        @click="addTodo"
        >{{ btnTodoCaption }}
      </v-btn>
    </v-list-item>
      <v-spacer/>
    <v-list-item>
      <v-btn
        fixed
        right
        @click="addNote"
        >{{ btnNoteCaption }}
      </v-btn>
    </v-list-item>
    <v-list-item>
      <v-btn
        fixed
        right
        @click="clearPage"
        >Скрыть
      </v-btn>
    </v-list-item>
    <component :is="togglePage"></component>
  </section>

</template>

<script>
import AddNewTodoForm from './form/AddNewTodoForm.vue'
import AddNewNoteForm from './form/AddNewNoteForm.vue'
export default {
  components: {
    AddNewTodoForm,
    AddNewNoteForm
  },
  data () {
    return {
      page: null,
      btnTodoCaption: '+ Новая задача',
      btnNoteCaption: '+ Новая заметка'
    }
  },
  computed: {
    togglePage () {
      return this.page
    },
    activeClass (value) {
      return this.page === value && 'gray'
    }
  },
  methods: {
    clearPage () {
      this.page = null
    },
    addTodo () {
      this.page = 'AddNewTodoForm'
    },
    addNote () {
      this.page = 'AddNewNoteForm'
    }
  }
}
</script>

<style scoped>
div {
  text-align: center;
}

.gray {
  color: gray;
}
</style>
