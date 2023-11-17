// pages/index.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingInterval, setBillingInterval] = useState('monthly');

  useEffect(() => {
    // Fetch plans from your database
    axios.get('/api/plans').then((response) => setPlans(response.data));
  }, []);

  const handleSubscribe = async () => {
    // Call Stripe API to create a subscription
    // Update your database with the subscription details
    // ...
  };

  return (
    <div>
      <h1>Subscription App</h1>

      {/* Display available plans */}
      <div>
        <h2>Available Plans</h2>
        <ul>
          {plans.map((plan) => (
            <li key={plan._id}>
              {plan.name} - ${plan.price}/{billingInterval}
              <button onClick={() => setSelectedPlan(plan)}>Select Plan</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Select plan and billing interval */}
      {selectedPlan && (
        <div>
          <h2>Selected Plan</h2>
          <p>{selectedPlan.name} - ${selectedPlan.price}/{billingInterval}</p>
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
      )}
    </div>
  );
};

export default Home;
