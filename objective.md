# Freelance_Job_Listings_Website

## Objective
The project is a dynamic website displaying a list of freelance job listings fetched from an external API. Users can filter listings by occupation, refresh the listings (which shuffles the order), and "hire" a freelancer, which triggers a modal to input and submit hire details.  The website also features a dark mode toggle. The technologies used are HTML, CSS, JavaScript and Bootstrap.

## Output
<iframe src="https://niat-web.github.io/Freelance_Job_Listings_Website/" height="1000" width="300" title="Freelance_Job_Listings_Website"></iframe>

## Project Requirements
**Technologies:** HTML, CSS, JavaScript, Bootstrap

## Features to Implement
- Display a list of freelance job listings fetched from the API.
- Allow users to filter the job listings by occupation.
- Implement a "Hire a Freelancer" button that opens a modal for submitting hire details.

## UI Enhancements
- Implement a dark mode toggle.
- Display notifications upon successful form submission.

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Fetch job listings from the API. | Job listings are successfully retrieved and parsed. |
| Display job listings on the page. | Job listings are rendered as individual cards with relevant information. |
| Implement occupation filter. | Users can select an occupation and the job listings are filtered accordingly. |
| Implement "Hire a Freelancer" functionality. | Clicking "Hire a Freelancer" opens a modal, and submitting the modal displays a notification. |
| Implement refresh functionality | Refreshes/Shuffles the current data and displays on the webpage |
| Implement dark mode toggle | Toggling dark mode applies a dark theme to the website |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| DOM Manipulation | Used to dynamically create and update job listing cards, populate the occupation filter, and handle modal display. |
| Event Listeners | Used to handle user interactions such as clicking the search button, refresh button, hire button, and dark mode toggle. |
| Asynchronous JavaScript (async/await) | Used to fetch data from the API. |
| Fetch API | Used to make HTTP requests to retrieve job listings data. |
| Bootstrap Modal | Used to display the "Hire a Freelancer" modal. |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| Freetestapi | `https://www.freetestapi.com/api/v1/users` | Retrieves a list of user objects, each representing a freelance job listing. |

## MISC Section:

### 1. Formulas/Calculations:
- The project uses `Math.random() - 0.5` to shuffle the array when the refresh button is clicked. The `sort()` method uses this random number to determine the order of elements in the array, effectively shuffling it.

