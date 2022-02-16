<template>
  <b-card no-body class="users">
    <b-card-header>
      <div class="d-flex justify-content-between align-items-center">
        <h5>Users</h5>
        <b-button class="mr-1" variant="info">
          Create User
        </b-button>
      </div>
    </b-card-header>
    <b-card-body class="users-card-body">

    </b-card-body>
  </b-card>
</template>

<script>
  export default {
    name: "Users",
  }
</script>

<style lang="scss" scoped>
  .users {
    height: 100%;
    width: 100%;
    margin: 2rem;
  }

  .users-card-body {
    background: #E8E8E8;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .page-content {
    margin-left: 15%;
    margin-right: 15%;
    position: relative;
  }
</style>