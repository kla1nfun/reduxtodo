let nextTodoId = 0

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

export const getTodosSuccess = (text, author, id) => ({
  type: 'GET_USERS_SUCCESS',
  text,
  author,
  id
})
