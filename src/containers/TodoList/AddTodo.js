import React from 'react'

let AddTodo = (AuthorFilter, GetList) => {
  let input_text;
  let input_author;
  const styles = require('./TodoList.scss');
  return (
    <div className={styles.header}>
      <form onSubmit = {() => AuthorFilter(input_author.value) && GetList(input_text.value)}>
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


export default AddTodo