/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    const jobListings = document.getElementById('jobListings');
    const occupationFilter = document.getElementById('occupationFilter');
    const searchButton = document.getElementById('searchButton');
    const refreshButton = document.getElementById('refreshButton');
    const hireModal = new bootstrap.Modal(document.getElementById('hireModal'));
    const submitHireDetails = document.getElementById('submitHireDetails');
    const hireDetailsTextarea = document.getElementById('hireDetails');
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notificationMessage');
    const darkModeToggle = document.getElementById('darkModeToggle');
    let currentData = [];

    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Function to display a notification
    function showNotification(message) {
        notificationMessage.textContent = message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000); // Display for 3 seconds
    }

    // Function to create a job card
    function createJobCard(job) {
        const card = document.createElement('div');
        card.classList.add('card', 'col-md-4');

        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${job.name}</h5>
                <p class="card-text">Email: ${job.email}</p>
                <p class="card-text">Phone: ${job.phone}</p>
                <p class="card-text">Website: <a href="${job.website}" target="_blank">${job.website}</a></p>
                <button class="btn btn-primary hire-freelancer" data-id="${job.id}">Hire a Freelancer</button>
            </div>
        `;

        return card;
    }

    // Function to display job listings
    function displayJobListings(jobs) {
        jobListings.innerHTML = '';
        if (jobs && jobs.length > 0) {
            jobs.forEach(job => {
                const card = createJobCard(job);
                jobListings.appendChild(card);
            });
        } else {
            jobListings.innerHTML = '<p>No listings found.</p>';
        }
    }

    // Function to populate occupation filter options
    function populateOccupationFilter(jobs) {
        const occupations = [...new Set(jobs.map(job => job.occupation))];
        occupations.forEach(occupation => {
            const option = document.createElement('option');
            option.value = occupation;
            option.textContent = occupation;
            occupationFilter.appendChild(option);
        });
    }

    // Function to fetch data, checking API availability
    async function fetchData(url) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            } else {
                const proxyUrl = `https://api.allorigins.win/raw?url=${url}`;
                const proxyResponse = await fetch(proxyUrl);
                if (proxyResponse.ok) {
                    return await proxyResponse.json();
                } else {
                    console.error('Failed to fetch data from both API and proxy');
                    return null;
                }
            }
        } catch (error) {
            const proxyUrl = `https://api.allorigins.win/raw?url=${url}`;
            const proxyResponse = await fetch(proxyUrl);
            if (proxyResponse.ok) {
                return await proxyResponse.json();
            } else {
                console.error('Failed to fetch data from both API and proxy', error);
                return null;
            }
        }
    }
   // Initial data fetch
    async function initialize() {
        const apiUrl = 'https://www.freetestapi.com/api/v1/users';
        const data = await fetchData(apiUrl);
            if (data) {
            currentData = data;
            populateOccupationFilter(data);
            displayJobListings(data);
        } else {
            jobListings.innerHTML = '<p>Failed to load job listings.</p>';
        }
    }

    initialize();

    // Search button event listener
    searchButton.addEventListener('click', () => {
        const selectedOccupation = occupationFilter.value;
        const filteredJobs = selectedOccupation ? currentData.filter(job => job.occupation === selectedOccupation) : currentData;
        displayJobListings(filteredJobs);
    });

    // Refresh button event listener
    refreshButton.addEventListener('click', async () => {
    const apiUrl = 'https://www.freetestapi.com/api/v1/users';
        const data = await fetchData(apiUrl);
        if (data) {
            // Shuffle the data
            const shuffledData = data.sort(() => Math.random() - 0.5);
            currentData = shuffledData;
            displayJobListings(shuffledData);
        } else {
            jobListings.innerHTML = '<p>Failed to refresh job listings.</p>';
        }
    });

    // Event delegation for "Hire a Freelancer" button
    jobListings.addEventListener('click', (event) => {
        if (event.target.classList.contains('hire-freelancer')) {
            const jobId = event.target.dataset.id;
            hireModal.show();
        }
    });

    // Submit Hire Details event listener
    submitHireDetails.addEventListener('click', () => {
        const details = hireDetailsTextarea.value;
        console.log('Hire Details:', details);
        showNotification('Details submitted successfully!');
        hireDetailsTextarea.value = ''; // Clear the textarea
        hireModal.hide();
    });
});