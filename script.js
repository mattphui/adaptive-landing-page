// Select all buttons that should trigger pop-ups
const popupButtons = document.querySelectorAll("button[data-popup-id]");

// Add event listeners to open pop-ups
popupButtons.forEach(button => {
  button.addEventListener("click", function() {
    const popupId = this.dataset.popupId; // Get popup ID from data attribute
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = "block"; // Show the popup
    }
  });
});

// Select all close buttons inside pop-ups
const closeButtons = document.querySelectorAll(".popup button");

closeButtons.forEach(closeButton => {
  closeButton.addEventListener("click", function() {
    const popup = this.closest(".popup"); // Find the closest popup to this button
    if (popup) {
      popup.style.display = "none"; // Hide the popup
    }
  });
});

//MailChimp Form API Integration

// Function to send email to MailChimp API
/*async function subscribeToMailChimp(email) {
  try {
    const response = await fetch('https://shielded-wildwood-32023-0f6e16a32174.herokuapp.com/', {  // Change to your backend URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email_address: email
      })
    });

    if (response.ok) {
      alert("Successfully subscribed!");
    } else {
      alert("Failed to subscribe. Please try again.");
    }
  } catch (error) {
    console.error('Error:', error);
    alert("An error occurred. Please try again.");
  }
}


// Add event listeners to all forms
const forms = document.querySelectorAll('.email-form');

forms.forEach((form, index) => {
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    console.log('Form submitted'); // Check if this log appears
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value;

    if (email) {
      // Send email to MailChimp API
      subscribeToMailChimp(email);
    }

    // Close the popup after submission
    const popup = form.closest('.popup');
    if (popup) {
      popup.style.display = 'none';
    }
  });
});

*/
// Close popups
/*
const closeButtons = document.querySelectorAll(".popup button[id^='close-popup']");

closeButtons.forEach(closeButton => {
  closeButton.addEventListener("click", function() {
    const popup = this.closest(".popup");
    if (popup) {
      popup.style.display = "none";
    }
  });
});*/
