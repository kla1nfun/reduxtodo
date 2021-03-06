import React from 'react'
import FilterLink from '../../containers/TodoList/FilterLink'


const styles = require('../../containers/TodoList/TodoList.scss');
const Footer = () => (
  <footer className={styles.footer}>
        <ul className={styles.filters}>
              <li>
                  <FilterLink filter="SHOW_ALL">
                      All
                  </FilterLink>
              </li>
              <li>
                  <FilterLink filter="SHOW_ACTIVE">
                      Active
                  </FilterLink>
              </li>
              <li>
                  <FilterLink filter="SHOW_COMPLETED">
                      Completed
                  </FilterLink>
              </li>
        </ul>
  </footer>
)

export default Footer