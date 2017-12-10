$(document).ready(function(){
  var app = new Vue({
    el: '#app',
    data: {
      todo: {
        title: '',
        desc: '',
        date: ''
      },
      ToDos: []
    },
    methods: {
      getTodos: function() {
        this.ToDos = (localStorage.getItem('Todo') !== null) ? JSON.parse(localStorage.getItem('Todo')) : [];
      },

      addTodo: function() {
        this.ToDos.push(this.todo);
        localStorage.setItem('Todo', JSON.stringify(this.ToDos));
        this.getTodos();
        this.clearForm();
      },

      editTodo: function(todo) {

      },

      removeTodo: function(todo) {
        if(confirm("Are you sure you want to delete ToDo?")){
          var index = this.ToDos.indexOf(todo);
          this.ToDos.splice(index, 1);
          localStorage.setItem('Todo', JSON.stringify(this.ToDos));
        } else {
          alert("ToDo has not been deleted")
        }
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
