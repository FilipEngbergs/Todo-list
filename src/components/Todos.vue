<template>
  <CreateTodo :todos="todos" />
  <ShowTodos
    @todo="getSpecificTodo($event)"
    @modal="showModal($event)"
    :todos="todos"
  />
  <Modal @removeModal="removeModal" :todo="todo" :modalView="modalView" />
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Options, Vue } from "vue-class-component";
import CreateTodo from "@/components/CreateTodo.vue";
import ShowTodos from "@/components/ShowTodos.vue";
import Modal from "@/components/Modal.vue";

@Options({
  components: {
    CreateTodo,
    ShowTodos,
    Modal,
  },
})
export default class Todos extends Vue {
  todos: Todo[] = [];
  todo: Todo[] = [];
  modalView = false;

  showModal(modal: boolean) {
    this.modalView = modal;
    window.scrollTo(0, 0);
  }
  removeModal() {
    this.modalView = false;
    this.todo.pop();
    window.scrollTo(0, 300);
  }
  getSpecificTodo(t: Todo) {
    this.todo.push(t);
  }
}
</script>

<style scoped lang="scss"></style>
