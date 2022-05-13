<template>
  <div class="modal-overlay" v-if="modalView" @click="removeModal">
    <div class="modal" v-for="(item, i) in todo" :key="i">
      <div class="button-container">
        <i class="fa-solid fa-xmark" @click="removeModal"></i>
      </div>
      <div class="todo-container">
        <h1>Todo:</h1>
        <p>{{ item.description }}</p>
        <h1>Date:</h1>
        <p>{{ item.date }}</p>
      </div>
      <div class="icon-container">
        <i v-if="item.done" class="fa-solid fa-check"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class Modal extends Vue {
  @Prop() todo!: Todo[];
  @Prop() modalView!: boolean;

  removeModal() {
    this.$emit("removeModal");
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/mixins.scss";
@import "@/assets/styles/extends";
.modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    width: 80%;
    height: 90%;
    background-color: white;
    border: 3px solid #215374;
    border-radius: 15px;
    @include tablet {
      width: 50%;
    }
    .button-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 10%;
      width: 90%;
      i {
        font-size: 30px;
        color: #215374;
        @extend %clickable;
      }
    }
    .todo-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      height: 80%;
      width: 70%;
      border-bottom: 5px solid #215374;
      h1 {
        font-size: 40px;
      }
      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 250px;
        font-size: 30px;
        text-decoration: underline;
      }
    }
    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 15%;
      i {
        font-size: 45px;
        color: green;
      }
    }
  }
}
</style>
