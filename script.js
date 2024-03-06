var todos = []

var todoWrapper = document.querySelector('.list-group');

function addTodo(){
    var newTodo = document.getElementById('todo').value;
}

function renderTodos(){
  var todoItem =  `<li class ="list-group-item d-flex align-items-center justify-content-between">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefult">
            <label class="form-check-label" for="flexCheckDefult">
                First todo
            </label>
        </div>
        <div>
            <button class="btn btn-primary" type="button" id="button-addon2">Edit</button>
            <button class="btn btn-danger" type="button" id="button-addon2">Delete</button>
        </div>
    </li>`
}

function deleteTodo(){}

function editTodo() {}
