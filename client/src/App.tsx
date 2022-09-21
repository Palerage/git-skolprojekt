import React from "react";
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import DetailPage from './pages/DetailPage';
import Homepage from './pages/Homepage';
import LoginPage from './pages/Login';
import 'antd/dist/antd.css';
import Categories from './components/Categories';
import CategoryPage from './pages/CategoryPage';


function App() {

  return (
    <>
      <Navigation/>
      <Route exact path="/" component={Categories} />
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/category/:id" component={CategoryPage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/detail" component={DetailPage}/>
      </Switch>
    </>
  );
}

export default App;
