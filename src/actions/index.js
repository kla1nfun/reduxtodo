import request from 'axios';
let nextTodoId = 0
let url = 'https://jsonplaceholder.typicode.com/todos'


export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const addAuthor = (author) => ({
  type: 'ADD_AUTHOR',
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

export const dataEntities = {
  defaults: {
    baseUrl: 'https://jsonplaceholder.typicode.com/todos'
  },
  entities: {
    jsontodos: {
      type: 'GET_TODOS',
      jsontodos: {
        request: (data) => request.post(dataEntities.defaults.baseUrl + '/fruits', data, {headers: {"Content-Type": "application/json"}})
      }
    }
  }
};
