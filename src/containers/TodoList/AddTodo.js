import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/index'

let AddTodo = ({ dispatch }) => {
  let input;
  const styles = require('./TodoList.scss');
  return (
    <div className={styles.header}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input
          placeholder="Your todo"
          className={styles.newtodo} ref={node => {
          input = node
        }} />
        <button className={styles.add_todo} type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo