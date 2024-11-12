


document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  
  // const whatsappMessage = encodeURIComponent(
  //   `*Contact Form Submission*\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  // );


  // const whatsappNumber = '9524584817'; 
  // const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  
  // window.location.href = whatsappURL;





  fetch('https://new-folder-u8t3.onrender.com/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      message: message,
    }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Optional: Show a success message
      document.getElementById('submitSuccessMessage').style.display = 'block';

      // Reset the form
      document.getElementById('contactForm').reset();

      setTimeout(function() {
        document.getElementById('submitSuccessMessage').style.display = 'none';
      }, 2000);
      
    } else {
      // Handle error if the email wasn't sent
      alert('There was an issue with sending the email. Please try again.');
    }
  })
  .catch(error => {
    // Handle network or other errors
    console.error('Error:', error);
    alert('There was an error processing your request. Please try again later.');
  });

});
