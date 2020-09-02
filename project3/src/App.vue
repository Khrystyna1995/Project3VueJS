<template>
  <div>
    <h1>Khrystyna Bereza</h1>
    <div>
      <img  :src="img">
    </div>
    <Header/>
   <router-view/>
  </div>
</template>

<script>

import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  },

  data() {
    return {
      img: "https://i.pinimg.com/originals/b8/9b/2b/b89b2b91be59d096f068f3076dfbbd9a.jpg"
    }
  },

  methods: {
    
  }

}
</script>

<style>
div {
  background: rgb(247, 227, 244);
}
h1 {
  text-align: center;
  color: rgb(238, 1, 226);
}

img{

  display: block;
  margin-left: auto;
  margin-right: auto;
  
  width: 300px ;
  height: 200px;
} 

</style>
