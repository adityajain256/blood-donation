// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Fetch user data (mock data for now)
    const user = {
      name: 'hoon',
      role: 'Donor',
      bloodGroup: 'A+',
      location: 'New York, USA',
    };
   
    // Populate user info
    document.getElementById('username').textContent = user.name;
    document.getElementById('user-role').textContent = user.role;
    document.getElementById('user-blood-group').textContent = user.bloodGroup;
    document.getElementById('user-location').textContent = user.location;
  
    // Logout functionality
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        alert('You have been logged out.');
        window.location.href = 'index.html';
      });
    }
  });