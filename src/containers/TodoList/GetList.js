import React from 'react'
import { connect } from 'react-redux'
import { addTodo} from '../../actions/index'
import AddTodo from './AddTodo'

const mapDispatchToPropsList = (dispatch) => {
    const jsonarr = [{
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  },
  {
    "userId": 2,
    "id": 21,
    "title": "suscipit repellat esse quibusdam voluptatem incidunt",
    "completed": false
  },
  {
    "userId": 2,
    "id": 22,
    "title": "distinctio vitae autem nihil ut molestias quo",
    "completed": true
  }];
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

const GetList = connect(
    mapDispatchToPropsList
)(AddTodo)

export default GetList

