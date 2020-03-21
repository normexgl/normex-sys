<template>
    <div>
      <b-card class="text-center">
        <h1 class="display-3">Home</h1>
        <img alt="Normex logo" src="../assets/logo_normex_small.png" height="25%" width="25%">
        <p class="lead">Welcome to Normex-sys. This is the home page</p>
      </b-card>
    </div>
</template>

<script>
export default {
  name: 'Home' // this is the name of the component
}
</script>

<style>
  .hero {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 1.5rem;
  }
</style>