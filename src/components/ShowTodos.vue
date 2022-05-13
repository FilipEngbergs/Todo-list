<template>
  <div class="todo-wrapper">
    <div class="todo-container">
      <div
        :class="[{ done: t.done }, 'undone']"
        v-for="(t, i) in todos"
        :todos="t"
        :key="i"
      >
        <div class="text-container">
          <h1>Todo:</h1>
          <h3>{{ t.description }}</h3>
        </div>
        <div class="button-container">
          <button @click="showModal(t)">Show more</button>
        </div>
        <div class="icon-container">
          <i
            @click="removeTodo(i)"
            id="delete"
            class="fa-solid fa-trash-can"
          ></i>
          <i
            @click="confirmTodo(t)"
            id="confirm"
            class="fa-solid fa-circle-check"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class ShowTodos extends Vue {
  @Prop() todos!: Todo[];
  activateModal = false;

  removeTodo(index: number) {
    if (confirm("Are you sure?")) {
      this.todos.splice(index, 1);
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 300);
    }
  }

  confirmTodo(todo: Todo) {
    if (todo.done == false) {
      todo.done = true;
    } else {
      todo.done = false;
    }
  }

  showModal(t: Todo) {
    this.activateModal = true;
    this.$emit("modal", this.activateModal);
    this.$emit("todo", t);
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/extends";
.todo-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .todo-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    gap: 15px;
    @include tablet {
      align-self: center;
      display: flex;
      flex-wrap: wrap;
      flex-shrink: 0;
      overflow-x: scroll;
      overflow-y: hidden;
      width: 90%;
      height: 550px;
    }
    @include desktop {
      height: 400px;
      width: 85%;
    }
    .undone {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      height: 150px;
      background-size: 400% 400%;
      box-shadow: 0px 0px 15px #0000007e;
      z-index: 5;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      border-bottom-right-radius: 10px;
      border-top-right-radius: 10px;
      @extend %clickable;
      @include tablet {
        flex-direction: column;
        justify-content: space-around;
        width: 25%;
        height: 300px;
        margin-left: 25px;
      }
      @include desktop {
        width: 20%;
        height: 350px;
      }
      .text-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        background-color: #3cbfe713;
        column-gap: 10px;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        @include tablet {
          flex-direction: column;
          height: 60%;
          width: 100%;
          justify-content: center;
        }
        h1 {
          margin-left: 10px;
          justify-self: flex-start;
          font-size: 22px;
          @include tablet {
            font-size: 20px;
            align-self: center;
          }
        }
        h3 {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100px;
          font-size: 16px;
          @include tablet {
            font-size: 14px;
          }
        }
      }
      .button-container {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #3cbfe713;
        width: 30%;
        height: 100%;

        @include tablet {
          width: 100%;
          height: 20%;
          margin-right: 0px;
          margin-bottom: 0px;
        }
        button {
          font-size: 9px;
          @extend %buttonStyle;
          @extend %clickable;
          @include tablet {
            font-size: 10px;
          }
        }
      }
      .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
        gap: 25px;
        flex-direction: column;
        height: 100%;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        @include tablet {
          flex-direction: row;
          width: 100%;
          height: 20%;
          column-gap: 60px;
        }
        @include desktop {
          column-gap: 80px;
        }
        #delete {
          font-size: 30px;
          @extend %clickable;
          @include tablet {
            font-size: 25px;
          }
        }
        #confirm {
          font-size: 30px;
          @extend %clickable;
          color: green;
          @include tablet {
            font-size: 25px;
          }
        }
      }
    }
    .done {
      background: inherit;
      box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.05);
      border: 1px solid green;
      filter: blur(1.5px);
      .text-container {
        border: none;
        h3 {
          text-decoration: line-through;
        }
      }
      .icon-container {
        border: none;
      }
    }
  }
}
</style>
