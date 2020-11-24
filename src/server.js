const stripe = require('stripe')('sk_test_51GKILKHJLUbfEz2znzwbMrMxjQ9GFphm43CO7cuMNcCUdeFpWiSQrOyCvTFk4zZBNXQgPiPB0jnkA9y2nDFno1QO00mTEsAiX2');
const express = require('express');
const app = express();
app.use(express.static('.'));
const YOUR_DOMAIN = 'http://localhost:3000/checkout';
app.post('/create-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        customer_email: 'customer@example.com',
        submit_type: 'donate',
        billing_address_collection: 'auto',
        shipping_address_collection: {
            allowed_countries: ['US', 'CA'],
        },
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Stubborn Attachments',
                        images: ['https://i.imgur.com/EHyR2nP.png'],
                    },
                    unit_amount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });
    res.json({ id: session.id });
});
app.listen(4242, () => console.log('Running on port 4242'))