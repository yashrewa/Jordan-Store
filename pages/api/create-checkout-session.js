
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51NwPdDSFBQprCYehxbsiZziOEipmZSfqQ3Xw824yBT5SPtUlLHli3UiqRcTEF3LYF9Bs2FQBfVXNYJxLqPgheRGx00sbAEFHTi', {
    apiVersion: '2023-08-16'
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { items } = req.body;
            console.log(req.body);
            const tranformedItems = items.map((item) => ({
                price_data: {
                    currency: 'INR',
                    product_data: {
                        name: item.name,
                        images: [item.thumbnail]
                    },
                    unit_amount: item.price * 100
                },
                quantity: item.quantity
            }))

            const session = await stripe.checkout.sessions.create({ line_items: tranformedItems, mode: 'payment', success_url: `https://jordan-store-dream.vercel.app/success`, cancel_url: `https://jordan-store-dream.vercel.app/failed` });

            res.json({
                url: (session).url
            });
        } catch (err) {
            return res.send(err)
        }
    }

}