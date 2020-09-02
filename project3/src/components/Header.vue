<template>
  <ul class="nav justify-content-center">
  <li class="nav-item">
    <router-link class="nav-link" active-class="active" exact to="/">Home</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" active-class="active" to="/contacts">Contact</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" active-class="active" to="/myProject">My Project</router-link>
  </li>
</ul>
</template>

<script>


export default {
  name: 'Header',
  
    data() {
    return {
      
    }
  },

  methods: {
    
  }

}
</script>

<style>
 
 .active{
background-color: blueviolet ;
color: black;
}
</style>
