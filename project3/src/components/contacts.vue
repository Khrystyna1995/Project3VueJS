<template>
  <div>
   <h1>Contact</h1>
   <div class="myContact">
       <p>
       name: Khrystyna Bereza
   </p>
   <p>
       email: kric29_95@i.ua 
    </p>

    <p>
        tel: +380677807030
    </p>
    </div>
  <button @click="navigateToHome">To Home</button>

  </div>
</template>

<script>


export default {
  name: 'contacts',

  methods: {
      navigateToHome() {
          this.$router.push({path: '/'})
      }
  }
}
</script>

<style  scoped>
.myContact{
    width: 400px;
    height: 150px;
    background-color: cornsilk;
    display: block;
  margin-left: auto;
  margin-right: auto;
}


</style>