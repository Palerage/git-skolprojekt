import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
//import './App.css';
import './sass/main.scss';
import Navigation from './components/Navigation';
import 'antd/dist/antd.css';
import HomePage from './pages/Homepage';
import Login from './pages/Login';
import DetailPage from './pages/DetailPage';
import Categories from './components/Categories';
import CategoryPage from './pages/CategoryPage';
import DescriptionPage from './pages/DescriptionPage';
import BasketPage from './pages/BasketPage';
import { useAppDispatch } from './redux/store/configureStore'; 
import { fetchBasketAsync } from './redux/slice/basketSlice';
import Dashboard from './pages/Dashboard';
import { getUser } from './redux/slice/userSlice';
import PrivateRoute from './components/PrivateRoute';
import CheckoutWrapper from './pages/CheckoutPage';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBasketAsync());
    dispatch(getUser())
  }, [dispatch]);
  return (
    <>
      <Navigation />
      <Route exact path="/" component={Categories} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/course/:id" component={DescriptionPage} />
        <Route exact path="/basket" component={BasketPage} />
        <Route exact path="/category/:id" component={CategoryPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/detail" component={DetailPage} />
        <PrivateRoute exact path="/profile" component={Dashboard} />
        <PrivateRoute exact path="/checkout" component={CheckoutWrapper} />
      </Switch>
    </>
  );
}

export default App;