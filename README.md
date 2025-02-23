# Course Management System

A React-based course management system with user authentication and course tracking functionality. This application provides a clean, intuitive interface for managing educational courses.

## Features

- User Authentication (Login/Register)
- Course Dashboard
- Course Management (Add/View courses)
- Material-UI Integration
- Responsive Design

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/kinggslayer/assignment
cd assignment
```

2. Install dependencies:
```bash
npm install
```

3. Install required packages:
```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react-router-dom
```

## Project Structure

```
src/
  components/
    Login.js         # User login component
    Register.js      # User registration component
    Dashboard.js     # Main dashboard component
  App.js            # Main application component
  index.js          # Application entry point
```

## Usage

1. Start the development server:
```bash
npm start
```

2. Open your browser and navigate to `http://localhost:3000`

3. Register a new account or login with existing credentials

4. Use the dashboard to manage courses:
   - View existing courses
   - Add new courses
   - Navigate between different sections

## Features Breakdown

### Authentication
- Login with email and password
- New user registration
- Form validation
- Navigation between auth pages

### Dashboard
- Course listing
- Add new courses through modal dialog
- Responsive layout
- Navigation header with logout functionality

### UI/UX
- Material-UI components
- Responsive design
- Clean and intuitive interface
- Form validation feedback

## Future Enhancements

1. Backend Integration
   - Connect to a REST API
   - Implement proper authentication
   - Add data persistence

2. Additional Features
   - Course editing and deletion
   - User profile management
   - Course categories and filtering
   - Search functionality
   - Course details page
   - Student enrollment system

3. Technical Improvements
   - State management (Redux/Context)
   - Enhanced error handling
   - Loading states
   - Route protection
   - Unit tests
   - E2E tests
