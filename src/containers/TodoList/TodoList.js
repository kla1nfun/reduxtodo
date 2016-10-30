import React, {Component} from 'react';
import Helmet from 'react-helmet';
<<<<<<< HEAD
=======
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
>>>>>>> 863875877ede35dda3d02a7dff828ecf29ee32fe
import App from '../../components/TodoComponents/App'

export default class TodoList extends Component {

    render() {
        const styles = require('./TodoList.scss');
            return (
                <div className={styles.outer_todoapp}>
                    <div className={styles.todoapp}>
                        <div className="container">
                            <h1>TodoList</h1>
                            <Helmet title="TodoList"/>
                                <App />
                        </div>
                     </div>
                </div>
            );
        }
}

