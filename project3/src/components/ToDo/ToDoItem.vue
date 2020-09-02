<template>
    <div id="todos">
        <div class="todo" 
            v-for="(todo) in todos" 
            :key="todo.id"> <h3>{{todo.name}}</h3>
        
        <button id="remove" @click="() => removeItem(todo.id)"
        >-</button>  
        
        </div>
    </div>
</template>

<script>
export default {
    name: "ToDoItems",
    props: ["todos"],

    methods: {
        removeItem(id) {
        this.$emit("removeItem", id);
        }
    }
}
</script>

<style scoped>
 
 #todos{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    width: 100%;
}

.todo{
    width: 20%;
    margin: 15px;
    padding: 15px;
    background-color: aliceblue;

    display: flex;
    justify-content: space-between;
}

 #remove{
            width : 50px;
            height : 50px;

            color: rgb(44, 11, 11);
            font-size: 28px;
            line-height: 1;
            font-weight: 700;

            background-color : rgb(96, 179, 218);
            cursor: pointer;

}
</style>