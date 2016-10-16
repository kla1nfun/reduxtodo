import React, {Component} from 'react';
import Helmet from 'react-helmet';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../../reducers/index'
import App from '../../components/TodoComponents/App'

export default class TodoList extends Component {

    render() {
        const styles = require('./TodoList.scss');
        let store = createStore(todoApp);
            return (
                <div className={styles.outer_todoapp}>
                    <div className={styles.todoapp}>
                        <div className="container">
                            <h1>TodoList</h1>
                            <Helmet title="TodoList"/>
                            <Provider store={store}>
                                <App />
                            </Provider>
                        </div>
                     </div>
                </div>
            );
        }
}
