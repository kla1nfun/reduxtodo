import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/index'
import { addAuthor } from '../../actions/index'

let AddTodo = ({ dispatch }) => {
  let input_text;
  let input_author;
  const styles = require('./TodoList.scss');
  return (
    <div className={styles.header}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input_text.value.trim() && !input_author.value.trim()) {
          return
        }
        dispatch(addTodo(input_text.value, input_author.value))
        input_text.value = ''
      }}>
        <input
          placeholder="Your todo"
          className={styles.newtodo} ref={node => {
          input_text = node
        }} />
        <input
          placeholder="Your name"
          className={styles.newtodo} ref={node => {
          input_author = node
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