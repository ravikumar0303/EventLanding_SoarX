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
  
  const express = require('express');
  const bodyParser = require('body-parser');
  const { GoogleSpreadsheet } = require('google-spreadsheet');
  
  const app = express();
  app.use(bodyParser.json());
  
  // Load your Google Sheets API credentials JSON file
  const creds = require('#');
  const doc = new GoogleSpreadsheet('https://script.google.com/macros/s/AKfycbybJ92bCxClVMxzx5YgN2gPyPRbIN8XfK-67rcaIgaIS7nqJ3qOFvZGVWClFsfX6sM/exec');
  
  async function init() {
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
  }
  
  init();
  
  app.post('/submit', async (req, res) => {
    const { name, email, contact, college, branch, year } = req.body;
  
    try {
      const sheet = doc.sheetsByIndex[0];
      await sheet.addRow({ Name: name, Email: email, Contact: contact, College: college, Branch: branch, Year: year });
      res.sendStatus(200);
    } catch (error) {
      console.error('Error:', error);
      res.sendStatus(500);
    }
  });
  
  const PORT = process.env.PORT || 2001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
