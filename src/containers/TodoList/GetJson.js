// returns a function and will be called in the Redux-Thunk middleware
import fetch from 'isomorphic-fetch'
import { addJsonAction  } from '../../actions/index'

export default function loadJsonAction() {
  return function(dispatch) {
    var url = 'https://jsonplaceholder.typicode.com';

    return fetch(url)

      .then(function(jsonResult) {
        dispatch(addJsonAction(jsonResult));
      })
      .catch(function(err) {
        alert("Oops... error");
      });
  }
}