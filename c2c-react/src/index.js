import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Index from './views/Index'
import FormPage from './views/FormPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Skills from './views/Skills';
import List from './views/List';
import Item from './views/Item';



ReactDOM.render(
  // <React.StrictMode>
  //   <Index />
  // </React.StrictMode>,
  // document.getElementById('root')


  // <React.StrictMode>
  //   <Router>
  //   <div>
  //       <Link to="/">Index</Link>
  //     </div>
  //     <div>
  //       <Link to="/form">FormPage</Link>
  //     </div>


  //     <Switch>
  //       <Route exact path="/">
  //         <Index />
  //       </Route>
  //       <Route path="/form">
  //         <FormPage />
  //       </Route>
  //     </Switch>
  //   </Router>
  // </React.StrictMode>,


  <Router>
    <Switch>
  <Route exact path="/">
       <Index />
       </Route>
       <Route exact path="/form">   
       <FormPage /> 
  </Route>
  <Route exact path="/skills">   
       <Skills /> 
  </Route>
  <Route exact path="/list">   
       <List /> 
  </Route>
  <Route exact path="/list..">   
       <Item /> 
  </Route>

  </Switch>
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
