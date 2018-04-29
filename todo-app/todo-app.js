let todos = [];

const filters = {
    searchText: '',
    hideCompleted: false
};

const todosJSON = localStorage.getItem('todos');
if (todosJSON !== null){
    todos = JSON.parse(todosJSON);
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function (todo){
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        return searchTextMatch && hideCompletedMatch;
    });

    const incompleteTodos = filteredTodos.filter(function(todo){
        return !todo.completed;
    });

    document.querySelector('#todo-list').innerHTML = '';

    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todo-list').appendChild(summary);

    filteredTodos.forEach(function (todo){
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todo-list').appendChild(p);
    });
};

renderTodos(todos, filters);

// filter todos
document.querySelector('#todo-search').addEventListener('input', function(e){
    // re-render todos on every new input value
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});

// add new todo
document.querySelector('#todo-text').addEventListener('submit', function(e){
    e.preventDefault();
    todos.push({
        text: e.target.elements.todoText.value,
        completed: false
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos, filters);
    e.target.elements.todoText.value = '';
});

// hide todos marked as completed
document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});