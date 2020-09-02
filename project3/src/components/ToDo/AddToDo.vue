<template>
 <div>
    <input type="text" placeholder="What's your plan?" v-model="toDoNew">
    <button class="submit" @click="addItem">+</button>
</div>
</template>

<script>
export default {
  name: 'AddToDo',
  data() {
      return{
          toDoNew: ""
      }
  },

  methods: {
      addItem() {
          this.$emit('addItem', this.toDoNew);
          this.toDoNew = "";
      }
  }

}
</script>


<style scoped>
    div {
        display: flex;
    }

    input {
            flex: 1;
            height: 50px;
            box-sizing: border-box;
            text-indent: 15px;

            font-size: 20px;
        }
        

    .submit {
            width : 50px;
            height : 50px;

            color: rgb(44, 11, 11);
            font-size: 28px;
            line-height: 1;
            font-weight: 700;

            background-color : rgb(96, 179, 218);
            border : none;
            outline: none;

            cursor: pointer;
    }


        
    

</style>