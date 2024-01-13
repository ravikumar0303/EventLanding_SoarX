// function submitForm2() {
//     // You can add Google Sheets integration here using AJAX or Google Forms
//     // For simplicity, let's just alert the submitted data.
//     alert("Registration Successful!");
// }


//         function submitForm() {
//             // Collect form data
//             var formData = {
//                 name: document.getElementById('name').value,
//                 email: document.getElementById('email').value,
//                 contact: document.getElementById('contact').value,
//                 company: document.getElementById('company').value,
//                 designation: document.getElementById('designation').value,
//                 industry: document.getElementById('industry').value,
//             };
           
//             // Simulate Google Sheets integration (replace with actual implementation)
//             console.log('Submitting to Google Sheets:', formData);

//             // For now, you can log the data to the console
//             console.log(formData);
            
//         }

document.getElementById('registrationForm').addEventListener('submit2', async function (event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const registrationData = {};
  
    formData.forEach((value, key) => {
      registrationData[key] = value;
    });
  
    try {
      const response = await fetch('/submit2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });
  
      if (response.ok) {
        alert('Registration successful!');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
