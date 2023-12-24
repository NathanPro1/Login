// Define the valid usernames and passwords
const validUsers = {
    "user1": "password1",
    "user2": "password2",
    "user3": "password3",
    "gamingnathan":"goodgaming1221"
  };
  
  // Function to handle form submission
  function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get the username and password from the form
    let username = document.getElementById('Entry1').value;
    let password = document.getElementById('Entry2').value;
    
    // Check if the username and password are valid
    if (validUsers[username] && validUsers[username] === password) {
      alert('Login successful');
      // Redirect to index.html
      window.location.href = 'index.html';
    } else {
      alert('Invalid username or password');
    }
  }
  
  // Add event listener to the form submit button
  document.getElementById('loginForm').addEventListener('submit', validateForm);
  