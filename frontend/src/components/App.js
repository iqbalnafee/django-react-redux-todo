import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './todos/Dashboard';
import { Provider } from 'react-redux'; // added
import store from '../store'; // added

class App extends Component {
    render() {
        return (

            //The Provider makes the store available to the component nested inside of it.

            <Provider store={store}>
                <Dashboard />
            </Provider>

        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));