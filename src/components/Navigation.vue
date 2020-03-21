<template>
  <div>
<!-- As a heading -->
      <b-navbar toggleable="lg" variant="dark" type="dark">
        <b-navbar-brand>
          <span class="d-inline-block align-top">
          <img src="../assets/logo_smallest.png"
            alt="Normex" />
          </span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav_collapse" />

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <div v-for="routes in links"
              v-bind:key="routes.id">

              <div v-if="routes.children!=null">
                <b-nav-item-dropdown right>
                  <template slot="button-content">{{routes.text}}</template>
                  <b-dropdown-item v-for="child in routes.children"
                    v-bind:key="child.id" :to="`${child.page}`" @click.stop>
                    {{child.text}}
                  </b-dropdown-item>
                </b-nav-item-dropdown>
              </div>
              <div v-else>
                <b-nav-item :to="`${routes.page}`" v-bind:key="routes.id">
                  {{routes.text}}
                </b-nav-item>
              </div>
            </div>

          </b-navbar-nav>
          
          <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content"><em>Hello, {{user.username}} !</em></template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">
                <amplify-sign-out class="signout" />
              </b-dropdown-item>
            </b-nav-item-dropdown>

          </b-navbar-nav>
          

        </b-collapse>
    </b-navbar>

  </div>
</template>
<script>
import { Auth } from 'aws-amplify'
export default {
  name: 'Navigation',
  components: {
    //Auth
  },
  data () {
    return {
      user: {},
      links: [{
        id: 0,
        text: 'Home',
        page: '/#'
      },
      {
        id: 1,
        text: 'Customers',
        page: '',
        children: [{
          id: 1.1,
          text: 'Company',
          page: '/customers/Company'
          },
          {
          id: 1.2,
          text: 'Individual',
          page: '/customers/Individual'
          }]
      },
      {
        id: 2,
        text: 'Products',
        page: '/products/Products'
      },
      {
        id: 3,
        text: 'Orders',
        page: '/orders/Orders'
      },
      {
        id: 4,
        text: 'Invoices',
        page: '/invoices/Invoices'
      }]
    }
  },
  beforeCreate () {
    Auth.currentAuthenticatedUser()
      .then(user => { this.user = user })
      .catch(() => console.log('not signed in...'))
  },
  mounted () { this.updateList() },
  watch: { '$route' () { this.updateList() } },
  methods: {
    updateList () { this.breadcrumbList = this.$route.meta.breadCrumb }
  }
}
</script>
<style> 
  .spacing { 
    Margin-right: 10px; 
  }
  nav a.router-link-active {
    font-weight: 600; /* Bolds the text. */
  }
</style>