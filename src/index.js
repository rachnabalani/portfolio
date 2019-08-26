import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from './components/Jokes';
import Header from './components/Header';
import MusicMaster from './projects/music-master';
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path='/' render={() => <Header><App /></Header> } />
            <Route path='/jokes' render={() => <Header><Jokes /></Header> }/>
             <Route path='/top-tracks-project' render={() => <Header><MusicMaster /></Header> }/>
              {/* <Route path='/about' render={() => <Header><Jokes /></Header> }/>
               <Route path='/projects' render={() => <Header><Jokes /></Header> }/>
                <Route path='/contact' render={() => <Header><Jokes /></Header> }/> */}
        </Switch>
    </Router>,
    document.getElementById('root')
);