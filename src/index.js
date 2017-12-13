import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {MuiThemeProvider} from "material-ui";
import Client from "./components/client";
import {Provider} from "react-redux"
import store from "./store/store";

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Client />
        </MuiThemeProvider>
    </Provider>, document.getElementById('root'));
registerServiceWorker();