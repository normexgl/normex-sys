<template>
  <div id="app">
    <div v-if="!signedIn">
      <div style="text-align:center">
        <img alt="Normex logo" src="./assets/logo_normex_small.png" height="25%" width="25%">
        <Login />
      </div>
    </div>
    <div v-if="signedIn">
      <div style="margin-top: 0px;">
      <Navigation /></div>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Navigation from './components/Navigation'
import { AmplifyEventBus } from 'aws-amplify-vue'
import { Auth } from 'aws-amplify'

export default {
  name: 'App',
  components: {
    Login,
    Navigation
  },
  async beforeCreate () {
    try {
      const user = await Auth.currentAuthenticatedUser()
      this.signedIn = true
      console.log(user.Id + ' signed in!')
    } catch (err) {
      this.signedIn = false
    }
    AmplifyEventBus.$on('authState', info => {
      if (info === 'signedIn') {
        this.signedIn = true
      } else {
        this.signedIn = false
      }
    })
  },
  data () {
    return {
      signedIn: false
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}

main {
  /* text-align: center; */
  margin-top: 0px;
}
</style>
