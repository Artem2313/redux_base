import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Posts from './components/Posts';
import PostForm from './components/Postform';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>        
        <div className="App">  
        <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/:post_id' component={Post} />
          </Switch>        
          <PostForm />
          <hr />
          <Posts />
        </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
