import React from 'react'
import { connect } from 'react-redux'
import { addTodo, dataEntities  } from '../../actions/index'
import AddTodo from './AddTodo'
import {createEntityOperation} from 'redux-redents';

this.props.actions.entityOperation('jsontodos','index');

const mapDispatchToPropsList = (dispatch) => {
    return {
        onTodoClick: (input) => {
            if (!input.trim()) {
                return
            }
            this.props.jsontodos = jsonarr;
            if (input.trim() === 'get list') {
                for (let i = 0; i < jsonarr.length; i++) {
                    dispatch(addTodo(jsonarr[i].title))
                }
            } else {
                dispatch(addTodo(input))
            }
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
export default connect(mapStateToPropsTodos,mapDispatchToPropsTodos)(mapDispatchToPropsList);

const GetList = connect(
    mapDispatchToPropsList
)(AddTodo)

export default GetList