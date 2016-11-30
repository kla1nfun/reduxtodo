// import axios from 'axios';
// import store from '../redux/create';
// import { getTodosSuccess } from '../actions/index';
//
// /**
//  * Get all todos
//  */
//
// export function getTodos() {
//   return axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then(response => {
//       store.dispatch(getTodosSuccess(response.data.title, response.data.userId, response.data.id));
//       return response;
//     });
// }
//
// /**
//  * Search user's todos
//  */
//
// export function searchAuthors( author ) {
//   return axios.get('https://jsonplaceholder.typicode.com/todos?userId=1'+ author)
//     .then(response => {
//       store.dispatch(getTodosSuccess(response.data.title, response.data.userId, response.data.id));
//       return response;
//     });
// }
