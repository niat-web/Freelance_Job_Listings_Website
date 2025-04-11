# Freelance_Job_Listings_Website

## Objective
This project implements a dynamic website for freelance job listings using JavaScript for front-end functionality. The website incorporates features such as dark mode toggle, form validation, dynamic content loading via API, and local storage to enhance user experience. The core technologies used are HTML, CSS, and JavaScript, focusing on DOM manipulation, asynchronous operations, and event handling.

## Output
<iframe src="https://niat-web.github.io/Freelance_Job_Listings_Website/" height="1000" width="300" title="Freelance_Job_Listings_Website"></iframe>

## Project Requirements
**Technologies:** HTML, CSS, JavaScript, Font Awesome (for icons)

## Features to Implement
- Dark mode toggle with persistent user preference.
- Form validation for job applications.
- Display of user data fetched from an external API.

## UI Enhancements
- Implement smooth transitions for the dark mode toggle.
- Improve the styling of notifications for better visibility.

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Implement dark mode | Website appearance toggles between light and dark themes based on user preference and system settings. |
| Implement form validation | Job application form prevents submission if required fields are missing or invalid. |
| Fetch and display user data | Three user cards with data (name, email, occupation) fetched from API are displayed and updated dynamically. |
| Implement data refresh | A button is added to refresh the user data cards |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| DOM Manipulation | Used to update content, toggle dark mode, and display notifications. |
| Event Handling | Used to respond to user interactions (e.g., button clicks, form submissions). |
| Asynchronous Operations | Used to fetch data from the API and handle the response. |
| Variable Scoping | `const`, `let`, and `var` are used to declare variables with appropriate scope and mutability. |
| Functions | Functions are used for reusable code blocks, such as applying to jobs and handling API requests. |
| Arrays & Objects | Used to store data such as skills and job details. |
| Local Storage | Used to store the last visited time. |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| Freetestapi | `https://freetestapi.com/api/v1/users` | Fetches user data (name, email, occupation) for display on the website. |