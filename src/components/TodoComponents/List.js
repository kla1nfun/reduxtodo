import React, { PropTypes } from 'react'
import Todo from './Todo'


const styles = require('../../containers/TodoList/TodoList.scss');
const TodoList = ({ todos, onTodoClick }) => (
    <div className={styles.main}>
        <ul className={styles.todolist}>
          {todos.map(todo =>
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => onTodoClick(todo.id)}
            />
          )}
        </ul>
    </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList