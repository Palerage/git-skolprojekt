import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from '../components/Checkout';

const stripePromise = loadStripe('pk_test_51LmGhBEpWTl6lg0bEbHKRVJDnG7LT0XNxDc0zwnGWYL1ze47JCIDpNJ5KtuSGCsUFyKDL1xYmlnD3Z6FOH8DCVrq00pQJAHGOg');



export default function CheckoutPage() {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
}