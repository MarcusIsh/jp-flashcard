<template>
  <div>
    <ul class="nav theme-color">
      <li class="nav-item">
        <a
          class="nav-link active"
          aria-current="page"
          href="#"
          @click="clearWord"
          >Clear Word</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "header",
  props: {},
  methods: {
    clearWord() {
      this.$emit("clearWord");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */

.theme-color {
  background-color: aqua;
}
</style>
