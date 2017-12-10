$(document).ready(function(){
  var app = new Vue({
    el: '#app',
    data: {
      todo: {
        title: '',
        desc: '',
        date: '',
        complete: false
      },
      ToDos: []
    },
    methods: {
      getTodos: function() {
        this.ToDos = (localStorage.getItem('Todo') !== null) ? JSON.parse(localStorage.getItem('Todo')) : [];
        console.log(this.ToDos)
      },

      addTodo: function() {
        this.ToDos.push(this.todo);
        console.log(this.ToDos)
        localStorage.setItem('Todo', JSON.stringify(this.ToDos));
        this.getTodos();
        this.clearForm();
      },

      removeTodo: function(todo) {
       var index = this.ToDos.indexOf(todo);
       this.ToDos.splice(index, 1);
       localStorage.setItem('Todo', JSON.stringify(this.ToDos));
       console.log(this.ToDos);
      },

      completeToDo: function(todo) {
       todo.complete = true;
       localStorage.setItem('Todo', JSON.stringify(this.ToDos));
       console.log(todo);
      },

      clearForm: function() {
        this.todo.title = '';
        this.todo.desc = '';
        this.todo.date = '';
      }
    },

    beforeMount(){
      this.getTodos();
    }
  })
})
