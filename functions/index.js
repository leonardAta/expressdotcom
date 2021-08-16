const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51JCsRPHi6RLfVyuzsT0SuOIk4JfoQUPKKeAxoJeXBIJ5U0sFANMZbIccqkAu6FLOOHwoG9FIgxcTd6b6etRIwutI00iSsUg3o7')

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('hello')
})

app.post('/payments/create', async (req, res) => {
  const total = req.query.total

  console.log('Payment request has been received for amount ', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  })

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

exports.api = functions.https.onRequest(app)