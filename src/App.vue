<template>
  <div id="app">
    <example></example>
  </div>
</template>

<script>
import Example from "./components/Example";

export default {
  name: "App",
  components: {
    Example
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
