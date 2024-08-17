const express = require('express');
const fetch = require('node-fetch');  // Required to make the API call to MailChimp
const bodyParser = require('body-parser');  // For parsing incoming request bodies
const app = express();

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

app.post('/subscribe', async (req, res) => {
  const { email_address } = req.body;  // Extract the email from the request

  // MailChimp API details
  const apiKey = 'ec8bfe2cc00e50afb2d3b678c91a26e8-us22';  // Replace with your MailChimp API key
  const listId = '186e8e7de9';  // Replace with your MailChimp List ID
  const apiUrl = `https://us22.api.mailchimp.com/3.0/lists/186e8e7de9/members/`;

  // Send a request to MailChimp
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from('anystring:' + apiKey).toString('base64'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email_address: email_address,
        status: 'subscribed'
      })
    });

    // Handle the response from MailChimp
    if (response.ok) {
      res.status(200).json({ message: "Successfully subscribed!" });
    } else {
      res.status(response.status).json({ message: "Failed to subscribe." });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: "Server error." });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
