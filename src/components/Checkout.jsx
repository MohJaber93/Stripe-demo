import React, { useEffect } from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

const Checkout = ({ selectedProduct }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <StripeProvider apiKey="pk_test_51K3phHFxJDEAlW3luq9EaYUXfCMGcckv0UqEQ89KxkRlyFMDFvCyWHeDJNtK93Y5TlXvvgHVOiFTF4WKieLqmiTi00f4n8yM5U">
      <Elements>
        <CheckoutForm selectedProduct={selectedProduct} />
      </Elements>
    </StripeProvider>
  )
}

export default Checkout