import React, { PropTypes } from 'react'


const Todo = ({ onClick, completed, author, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {author + ':' + text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Todo