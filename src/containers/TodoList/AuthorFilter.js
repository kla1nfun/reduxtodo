import React from 'react'
import { connect } from 'react-redux'
import { addTodo, addAuthor, dataEntities } from '../../actions/index'
import AddTodo from './AddTodo'
import {createEntityOperation} from 'redux-redents';


this.props.actions.entityOperation('jsontodos','index');

const mapDispatchToPropsAuth = (dispatch) => {
    return {
        onTodoClick: (author) => {
            if (!author.trim()) {
                return
            }
            this.props.jsontodos = jsonarr;
            for (let i = 0; i < jsonarr.length; i++) {
                (author.trim() === jsonarr[i].userId) ? dispatch(addTodo(jsonarr[i].title)) : dispatch(addAuthor(author)) }
        }
    }
};

function mapStateToPropsTodos(state) {
  return {
    jsontodos : state.todos
  };
}
function mapDispatchToPropsTodos(dispatch) {
  const entityOpFunction = createEntityOperation(dataEntities);
  return {
    actions: {
      entityOperation : (...args) => dispatch(entityOpFunction(...args))
    }
  };
}
export default connect(mapStateToPropsTodos,mapDispatchToPropsTodos)(mapDispatchToPropsAuth);

const AuthorFilter = connect(
    mapDispatchToPropsAuth
)(AddTodo)

export default AuthorFilter