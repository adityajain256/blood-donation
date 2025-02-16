// script.js
// Basic interactivity (e.g., form validation, dynamic content)

// Example: Form validation for donor registration
document.addEventListener('DOMContentLoaded', () => {
    const donorForm = document.getElementById('donor-form');
    if (donorForm) {
      donorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const bloodGroup = document.getElementById('blood-group').value;
        const location = document.getElementById('location').value;
  
        if (name && bloodGroup && location) {
          alert('Donor registration successful!');
          // Redirect to dashboard or another page
          window.location.href = 'dashboard.html';
        } else {
          alert('Please fill out all fields.');
        }
      });
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const userId = '123'; // Replace with the actual user ID (e.g., from session or localStorage)
    fetch(`http://localhost:5000/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          // Populate user info
          document.getElementById('username').textContent = data.name;
          document.getElementById('user-role').textContent = data.role;
          document.getElementById('user-blood-group').textContent = data.bloodGroup;
          document.getElementById('user-location').textContent = data.location;
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  
    // Logout functionality
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        alert('You have been logged out.');
        window.location.href = 'index.html';
      });
    }
  });