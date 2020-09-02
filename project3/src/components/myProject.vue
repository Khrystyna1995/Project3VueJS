<template>
  <div>
   <AddToDo 

   @addItem="addItem"
   v-if="todos.length<=10"
   />
   <ToDoItem 
    :todos="todos"
    v-on:removeItem="removeItem"
    />
  </div>
</template>

<script>

import AddToDo from './ToDo/AddToDo';
import ToDoItem from './ToDo/ToDoItem';

export default {
  name: 'myProject',
  components: {
    AddToDo,
    ToDoItem
    },

  data() {
    return {
      todos: [
  {id: "1", name: "Read a book"},
  {id: "2", name: "Have a lunch"},
  {id: "3", name: "Go shopping"}
            ]}
},

  methods: {
    addItem(todo) {
      let todoObj = {
        id: Math.floor(Math.random() * 100) ,
        name: todo}
        
        this.todos.push(todoObj)
    },

     removeItem(id){
       this.todos = this.todos.filter(todo => todo.id != id);
     }
  }
}
</script>


