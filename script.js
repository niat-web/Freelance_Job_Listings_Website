/* script.js */
 document.addEventListener('DOMContentLoaded', () => {
  // 1. Core Concepts & Variable Scoping
  const appName = 'Freelance Job Listings'; // const: block-scoped, cannot be reassigned
  let jobCount = 0; // let: block-scoped, can be reassigned
  var userRole = 'guest'; // var: function-scoped (or global if outside a function)
 

  const isDarkModePreferred = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let isDarkMode = isDarkModePreferred();
 

  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
 

  const enableDarkMode = () => {
  body.setAttribute('data-theme', 'dark');
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  isDarkMode = true;
  };
 

  const disableDarkMode = () => {
  body.removeAttribute('data-theme');
  darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  isDarkMode = false;
  };
 

  if (isDarkMode) {
  enableDarkMode();
  }
 

  darkModeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
  enableDarkMode();
  } else {
  disableDarkMode();
  }
  });
 

  // 2. Control Flow
  if (userRole === 'admin') {
  console.log('Admin access granted.');
  } else {
  console.log('Limited access.');
  }
 

  // 3. User Input & Math
  const jobApplicationForm = document.getElementById('jobApplicationForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const hourlyRateInput = document.getElementById('hourlyRate');
  const hourlyRateValueSpan = document.getElementById('hourlyRateValue');
 

  hourlyRateInput.addEventListener('input', () => {
  hourlyRateValueSpan.textContent = hourlyRateInput.value;
  });
 

  jobApplicationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission
 

  // Form validation
  if (!jobApplicationForm.checkValidity()) {
  event.stopPropagation();
  jobApplicationForm.classList.add('was-validated');
  return;
  }
  jobApplicationForm.classList.remove('was-validated');
 

  // Process the form data (for now, just log it)
  const formData = new FormData(jobApplicationForm);
  const formValues = Object.fromEntries(formData.entries());
  console.log('Form Data:', formValues);
  displayNotification('Application submitted successfully!');
 

  // Clear the form
  jobApplicationForm.reset();
  hourlyRateValueSpan.textContent = '50';
  });
 

  jobApplicationForm.addEventListener('reset', () => {
  jobApplicationForm.classList.remove('was-validated');
  });
 

  function displayNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';
  setTimeout(() => {
  notification.style.display = 'none';
  }, 3000); // Hide after 3 seconds
  }
 

  // 4. Arrays & Objects
  const skills = ['HTML', 'CSS', 'JavaScript'];
  const job = {
  title: 'Frontend Developer',
  location: 'Remote',
  salary: 80000,
  skills: skills
  };
 

  // 5. Functions & Events
  function applyToJob(jobTitle, callback) {
  console.log(`Applying to ${jobTitle}...`);
  setTimeout(() => {
  callback(`Applied to ${jobTitle}!`);
  }, 1000);
  }
 

  applyToJob(job.title, (message) => {
  console.log(message);
  });
 

  // 6. Async Operations & 7. API Integration
  const totalJobsElement = document.getElementById('totalJobs');
  const activeFreelancersElement = document.getElementById('activeFreelancers');
  const newApplicationsElement = document.getElementById('newApplications');
  const userDataElement = document.getElementById('userData');
 

  async function fetchData(apiUrl) {
  try {
  const response = await fetch(apiUrl);
  if (response.ok) {
  return await response.json();
  } else {
  return null;
  }
  } catch (error) {
  const proxyUrl = `https://api.allorigins.win/raw?url=${apiUrl}`;
  const proxyResponse = await fetch(proxyUrl);
  if (proxyResponse.ok) {
  return await proxyResponse.json();
  } else {
  return null;
  }
  }
  }
 

  async function loadUserData() {
  userDataElement.textContent = 'Loading...';
  const apiUrl = 'https://freetestapi.com/api/v1/users';
  const data = await fetchData(apiUrl);
 

  if (data && Array.isArray(data.slice(0, 3))) {
  const suffledData = data.sort(() => Math.random() - 0.5);
  const userDetails = suffledData.slice(0, 3).map(user => `
  <div class="card">
  <div class="card-body">
  <h5 class="card-title">${user.name}</h5>
  <p class="card-text">Email: ${user.email}</p>
  <p class="card-text">Occupation: ${user.occupation}</p>
  </div>
  </div>
  `).join('');
  userDataElement.innerHTML = userDetails;
  } else {
  userDataElement.textContent = 'Failed to load user data.';
  }
  }
 

  // Initial data load
  loadUserData();
 

  // Refresh data button
  document.getElementById('refreshData').addEventListener('click', loadUserData);
 

  // Mock data loading (replace with actual API calls)
  totalJobsElement.textContent = Math.floor(Math.random() * 50);
  activeFreelancersElement.textContent = Math.floor(Math.random() * 100);
  newApplicationsElement.textContent = Math.floor(Math.random() * 20);
 

  // 8. DOM Manipulation
  const footer = document.querySelector('footer');
  const currentYear = new Date().getFullYear();
  footer.innerHTML = `<div class="container text-center">&copy; ${currentYear} Freelance Job Listings. All rights reserved.</div>`;
 

  // 9. Forms & Storage
  localStorage.setItem('lastVisited', new Date().toISOString());
  console.log('Last visited:', localStorage.getItem('lastVisited'));
 

  // 10. UI Enhancements
  // Already implemented dark mode toggle.
 

  // 11. Best Practices - Modular Code (functions), separation of concerns
  });