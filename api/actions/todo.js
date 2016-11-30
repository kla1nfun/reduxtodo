import 'whatwg-fetch'

let nextTodoId = 0;
let getTodos = {};


export const addTodo = (text, author) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  author
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

fetch ('https://jsonplaceholder.typicode.com/todos')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        getTodos = data;
        console.log(getTodos[1].userId);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });