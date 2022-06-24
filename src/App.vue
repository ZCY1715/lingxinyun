<script setup>
import Header from "./components/Header/index.vue"
</script>

<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>

</template>

<style>
html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Ubuntu", serif;
}

#app {
  position: absolute;
}

:root {
  --theme-color: #faa66e;
}

main {
  position: relative;
  top: 60px;
}

.svgContainer svg {
  width: inherit;
  height: inherit;
  opacity: .7;
}

.svgContainerHover svg {
  transition: .3s;
}

.svgContainerHover svg:hover {
  fill: var(--theme-color);
}
</style>
