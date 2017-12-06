window.onload = function(){
  var app = new Vue({
    el: '#app',
    data: {
      title: '',
      desc: '',
      date: ''
    },
    methods: {
      addTodo: function() {
        console.log("Title:" + this.title + " Desc: " + this.desc + " Date: " + this.date);
      }
    }
  })
}
