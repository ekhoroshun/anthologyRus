import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'moment-timezone';
import steem from 'steem';

import axios from 'axios';
import reducers from './reducers';

// Styling
import './sass/bootstrap.scss';
import './sass/App.scss';
import './sass/PoemPage.scss';
import './sass/test.css';

// Components
import Bootstrap from './Bootstrap';
import Home from './Home';
import PoemPage from './PoemPage';

ReactDOM.render((
    <Provider store={reducers}>
        <Router>
            <Switch>

            	<Bootstrap>
                	<Route exact path="/" component={ Home } /> 
                    <Route exact path="/poem/:id" component={PoemPage} />
                </Bootstrap> 

            </Switch>
        </Router>
    </Provider> 
), document.getElementById('root'));