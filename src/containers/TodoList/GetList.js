import React from 'react'
import { connect } from 'react-redux'
import { addTodo} from '../../actions/index'
import AddTodo from './AddTodo'

const mapStateToProps = (state) => ({
  jsonarr: state.jsonResult
})


const mapDispatchToProps = (dispatch) => {
    const jsonarr= [];
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
    mapDispatchToProps,
    mapStateToProps
)(AddTodo)

export default GetList

