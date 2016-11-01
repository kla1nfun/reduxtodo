import React from 'react'
import { connect } from 'react-redux'
import { addTodo, addAuthor, addJsonAction } from '../../actions/index'
import AddTodo from './AddTodo'
import { loadJsonAction } from './GetJson'


const mapDispatchToPropsAuth = (dispatch) => {
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
        onTodoClick: (author) => {
            if (!author.trim()) {
                return
            }
            for (let i = 0; i < jsonarr.length; i++) {
                (author.trim() === jsonarr[i].userId) ? dispatch(addTodo(jsonarr[i].title)) : dispatch(addAuthor(author)) }
        }
    }
};

const AuthorFilter = connect(
    mapDispatchToPropsAuth
)(AddTodo)

export default AuthorFilter