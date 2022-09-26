import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
import agent from '../actions/agent';
import Checkout from '../components/Checkout';
import { setBasket } from '../redux/slice/basketSlice';
import { useAppDispatch } from '../redux/store/configureStore';

const stripePromise = loadStripe('pk_test_51LmGhBEpWTl6lg0bEbHKRVJDnG7LT0XNxDc0zwnGWYL1ze47JCIDpNJ5KtuSGCsUFyKDL1xYmlnD3Z6FOH8DCVrq00pQJAHGOg');

export default function CheckoutWrapper() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    agent.Payments.paymentIntent()
      .then((basket) => dispatch(setBasket(basket)))
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
}