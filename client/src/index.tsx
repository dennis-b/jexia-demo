import { createBrowserHistory } from 'history';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import React from 'react';
import { render } from 'react-dom';

import { App } from './app/AppRoot';
import { AppStore } from './app/AppStore';

import './index.css';
import * as serviceWorker from './serviceWorker';

const appStore = new AppStore();

const routingStore = new RouterStore();
const stores = { routing: routingStore, appStore: appStore };
const browserHistory = syncHistoryWithStore(createBrowserHistory(), routingStore);


render(<App history={browserHistory} stores={stores} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
