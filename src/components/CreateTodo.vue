<template>
  <div class="input-wrapper">
    <div class="input-container">
      <div class="box">
        <input
          @keypress.enter="createTodo()"
          type="text"
          placeholder="Todo-item"
          v-model="userInput"
        />
        <button @click="createTodo()">Add Todo</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class CreateTodo extends Vue {
  @Prop() todos!: Todo[];
  userInput = "";
  date = this.formatted_date();

  createTodo() {
    if (this.userInput.length >= 1) {
      this.todos.push(new Todo(this.userInput, this.date));
      this.userInput = "";
      window.scrollTo(0, 300);
    } else {
      alert("You must enter a todo!");
    }
  }

  formatted_date() {
    var result = "";
    var d = new Date();
    result += d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    return result;
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/extends";

.input-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  background: linear-gradient(-45deg, #303030, #3cbfe7, #000000, #215374);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  box-shadow: 0px 0px 15px #0000007e;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @include tablet {
    height: 400px;
  }
  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 90%;
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 20px;
      input {
        height: 40px;
        width: 80%;
        font-size: 18px;
        text-align: center;
        border: 1px solid rgb(0, 0, 0);
        @include tablet {
          height: 40px;
          font-size: 18px;
        }
        @include desktop {
          width: 60%;
          font-size: 22px;
        }
      }
      input:focus {
        outline: none !important;
        border-color: #23a6d5;
        box-shadow: 0 0 5px #23a6d5;
      }
      button {
        @extend %buttonStyle;
        @extend %clickable;
        @include tablet {
          font-size: 14px;
        }
        @include desktop {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
