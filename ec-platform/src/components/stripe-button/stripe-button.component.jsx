import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KTad6JqjfiUnzXvIxXtxH4ICeluM4FLvgUzfLYfKWac3c3AcZUBDvVPz3SsJgpbUNghFexT57Eg8NAJvYH79z2a00yUGe6EmO'

    const onToken = token => {
        console.log(token)
        alert('payment successful');
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Cuz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;
