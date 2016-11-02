import React from 'react'
import { connect } from 'react-redux'
import { addTodo, addAuthor, addJsonAction } from '../../actions/index'
import AddTodo from './AddTodo'
import { loadJsonAction } from './GetJson'

const mapStateToProps = (state) => ({
  jsonarr: state.jsonResult
})

const mapDispatchToProps = (dispatch) => {
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
    mapDispatchToProps,
    mapStateToProps
)(AddTodo)

export default AuthorFilter