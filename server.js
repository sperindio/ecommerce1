const express = require("express");
//REMOVED const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

//Body parser will allow any character in the urls we pass
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Cors is for cross-origing requests. That's to say, it will block any out of order request to the server
//REMOVED app.use(cors());

//The following, will make sure that the client receive the index.html file from the server once it is in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

//We create a route to process payments on our backend server by, first of all, creating a request body with all the necessary information from the frontend to be sent to the payment processing API
app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  //After we've created the body of the request, we send it to the API and we wait for an error or success
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ stripeRes });
    }
  });
});
