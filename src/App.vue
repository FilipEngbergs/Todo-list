<template>
  <Todos />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Todos from "./components/Todos.vue";

@Options({
  components: {
    Todos,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Roboto Slab", serif;
}
</style>
