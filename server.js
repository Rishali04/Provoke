const express = require('express');
const mongoose = require('mongoose');
const stripe = require('stripe')('your-stripe-secret-key');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/subscription-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define your Plan model
const Plan = mongoose.model('Plan', {
  name: String,
  price: Number,
});

app.get('/api/plans', async (req, res) => {
  const plans = await Plan.find();
  res.json(plans);
});

app.post('/api/subscribe', async (req, res) => {
  const { planId, billingInterval, token } = req.body;

  try {
    // Call Stripe API to create a subscription
    const subscription = await stripe.subscriptions.create({
      customer: token.id,
      items: [{ price: planId }],
      billing: billingInterval,
    });

    // Update your database with subscription details
    // ...

    res.json({ success: true, subscription });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Subscription failed' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});