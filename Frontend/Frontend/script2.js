document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const resultsContainer = document.getElementById('results-container');
  
    if (searchForm) {
      searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
  
        const bloodGroup = document.getElementById('blood-group').value;
        const location = document.getElementById('location').value;
  
        // Fetch donors from the backend
        try {
          const response = await fetch(`http://localhost:5000/api/users/search?bloodGroup=${bloodGroup}&location=${location}`);
          const data = await response.json();
  
          if (response.ok) {
            displayDonors(data);
          } else {
            alert(data.message || 'No donors found.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
        }
      });
    }
  
    // Function to display donor results
    function displayDonors(donors) {
      resultsContainer.innerHTML = ''; // Clear previous results
  
      if (donors.length === 0) {
        resultsContainer.innerHTML = '<p>No donors found.</p>';
        return;
      }
  
      donors.forEach((donor) => {
        const donorCard = document.createElement('div');
        donorCard.classList.add('donor-card');
  
        donorCard.innerHTML = `
          <h3>${donor.name}</h3>
          <p><strong>Blood Group:</strong> ${donor.bloodGroup}</p>
          <p><strong>Location:</strong> ${donor.location}</p>
          <a href="chat.html" class="btn">Contact Donor</a>
        `;
  
        resultsContainer.appendChild(donorCard);
      });
    }
  });