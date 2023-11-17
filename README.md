# Provoke
1. Set Up Project:

Use Next.js for frontend.
Use Tailwind CSS for styling.
Set up a Node.js server for the backend.
2. User Registration:

Create a registration page where users can sign up.
Store user information in your database.
3. User Login:

Implement a login page for users to enter their credentials.
Authenticate users using the stored information in our database.
4. Display Available Plans:

Create a screen to fetch and display available subscription plans from our database.
Show details such as plan name, price, and features.
5. Select Plan and Billing Interval:

Allow users to select a plan and choose the billing interval (monthly/yearly).
6. Collect Credit Card Information:

Use Stripe.js to create a secure payment form.
Collect credit card information (use test cards for POC) after the user selects a plan.
7. Create Recurring Subscription:

Utilize Stripe APIs to create a recurring subscription for the selected plan.
Store subscription details in both our database and the Stripe platform.
8. Display Subscription Details:

After a successful subscription, show the selected plan details.
Fetch and display this information from our database.
9. Cancel Subscription:

Provide a button to cancel the selected plan.
Use Stripe APIs to cancel the subscription on the Stripe platform.
Update the subscription status in our database.
