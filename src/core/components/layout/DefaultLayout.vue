<template>
  <div id="menu-content-wrapper">
    <div id="content" class="d-flex justify-content-between">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
}
</script>

<style lang="scss">

#app {
  height: 100%;
  display: flex;
  overflow: hidden;
  margin-top: 0;
}

#menu-content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

#content {
  flex: 1;
  position: relative;
  overflow: hidden;
  display: flex;
}
</style>