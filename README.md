# Candidate Review Interface

## Objective
The objective of this project is to build a user interface (UI) for reviewing candidate submissions for each assignment. The UI should display candidate details and scores as per the provided mock response. Additionally, it should show detailed candidate profiles with individual assessment scores using the provided mock API data.

## Technical Specifications
- Frontend Framework: Next.js with TypeScript.
- API Interaction: Utilize mock API responses data as required by the API. Dummy data can be stored in a file and used accordingly.

## Deliverables
- A functioning Next.js application that meets the design and requirement specifications.
- Source code with a README file on GitHub.

## Deployment on Vercel.
## Assessment Criteria
- Adherence to the provided design: Ensure that the UI matches the provided design specifications.
- Proper state management: Implement efficient state management to handle candidate data and UI interactions.
- Error handling and edge case considerations: Implement robust error handling mechanisms and consider edge cases to enhance the user experience.

![assignment imag](https://res.cloudinary.com/gauravhealt/image/upload/v1715681953/videos/AssignmentScreen_voawqy.png)

# Work done by my side

## Components

### Home Component
- src/app/page.tsx
- Main entry point of the application.
- Imports Footer, Assignment, and Sidebar components.
- Renders these components within a flex container.

### Assignment Component
- components/main/index.tsx
- Displays assignment details and candidate information.
- Imports data from a JSON file (dummy.json) containing assignment and candidate information.
- Utilizes AssignmentDetails and CandidateCard components to display assignment details and candidate information respectively.
- Allows selection of candidates and displays their details.

### Sidebar Component
- components/Sidebar.tsx
- Displays sidebar navigation options.
- Includes navigation links and a create assignment button.

### AssignmentDetails Component
- components/main/left/AssignmentDetails.tsx
- Displays detailed information about the assignment.
- Renders a list of candidates and allows selection of individual candidates.
- Utilizes CandidateList component to display the list of candidates.

### CandidateList Component
- components/main/left/CandidateList.tsx
- Renders a list of candidates.
- Allows selection of individual candidates.
- Displays candidate name, email, and score.

### CandidateCard Component
- components/main/CandidateCard.tsx
- Displays detailed information about a selected candidate.
- Includes candidate's image, introduction, experience, hobbies, and scores.
- Provides an option to shortlist the candidate.

### ProgressBar Component
- components/main/ProgressBar.tsx
- Displays a progress bar indicating a candidate's score.
- Shows the score out of a maximum value.

### Carousel Component
- components/Carousel.tsx
- Implements a carousel to display interview questions.
- Allows navigation between different interview questions.

### Footer Component
- components/Footer.tsx
- Displays footer information such as copyright, contact, privacy, and terms.
- Data
- The application fetches assignment and candidate data from a JSON file (dummy.json). Candidate data includes attributes like name, email, score, image, video link, and various scores related to behavioral, communication, and situational handling skills.

![assignment imag](https://res.cloudinary.com/gauravhealt/image/upload/v1715683108/videos/Capture_w2jb4m.png)

# Usage

1. Clone the repository.
```
git clone https://github.com/saurabhm02/Candidate-Review-Interface.git
```
2. Install dependencies using.
```
> npm install
```
3. Run the application using 
```
> npm run build
```

## Dependencies
- React
- Next.js
- React Icons
- Tailwind CSS

## Author
- Name: Saurabh Mahapatra
- email: saurabhm121102@gmail.com
