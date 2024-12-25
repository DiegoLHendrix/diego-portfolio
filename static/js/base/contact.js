document.getElementById("fs-frm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const form = event.target;
    const formData = new FormData(form);
    const statusDiv = document.getElementById("form-status");

    // Clear any previous status messages
    statusDiv.innerHTML = "";

    // Send form data using Fetch API
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        statusDiv.innerHTML = "<p class='text-success'>Thank you! Your message has been sent.</p>";
        form.reset(); // Clear the form after successful submission
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            statusDiv.innerHTML = "<p class='text-danger'>" + data["errors"].map(error => error["message"]).join(", ") + "</p>";
          } else {
            statusDiv.innerHTML = "<p class='text-danger'>Oops! There was a problem submitting your form.</p>";
          }
        });
      }
    }).catch(error => {
      statusDiv.innerHTML = "<p class='text-danger'>Oops! There was a problem submitting your form.</p>";
    });
});
