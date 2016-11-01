let nextTodoId = 0

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

export const addJsonAction = (jsonResult) => ({
    type: "JSON_TODOS",
    jsonResult
})

// export const dataEntities = {
//   defaults: {
//     baseUrl: 'https://jsonplaceholder.typicode.com/todos'
//   },
//   entities: {
//     jsontodos: {
//       type: 'GET_TODOS',
//       jsontodos: {
//         request: (data) => request.post(dataEntities.defaults.baseUrl + '/fruits', data, {headers: {"Content-Type": "application/json"}})
//       }
//     }
//   }
// };