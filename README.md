# Portfolio Website

This repository contains the code for my responsive, user-friendly portfolio website. The website is built using React.js, a popular JavaScript library for building user interfaces. It also incorporates server-side rendering using Sanity, a content management system for fetching dynamic data. Styling of the website is handled using SCSS (Sass), a powerful CSS preprocessor.

## Overview

The website consists of several sections: Home, About, Work, Skills, Testimonials, and Contact. Each section provides relevant information about my skills and experience. It also includes a contact form for visitors to get in touch.

## File Structure

Here's a brief description of the key components in the project:

- `App.js`: This is the root component of the app. It sets up the routes for the application and wraps around the other components.
- `Navbar.jsx`: This component implements the navigation bar of the portfolio website. It includes links to the different sections of the website.
- `Header.jsx`: This component is the header section of the portfolio website. It includes an introduction and links to social media profiles.
- `About.jsx`: This component is used to present information about the portfolio owner, including their personal story, education, and interests.
- `Work.jsx`: This section showcases the portfolio owner's work. It dynamically fetches project data from a server and filters projects based on their category.
- `Skills.jsx`: This component presents the portfolio owner's skills and experiences. It fetches data about skills and experiences from a server and displays them in a visually appealing manner.
- `Testimonial.jsx`: This component displays testimonials from clients or colleagues. It also features brands the portfolio owner has worked with.
- `Footer.jsx`: This component includes a contact form and contact information. It allows visitors to get in touch with the portfolio owner.

Each component has a corresponding SCSS file that handles its styling, allowing for modular and efficient design.

## Getting Started

Follow these steps to run this project locally:

1. Clone the repository
```bash
git clone link
```

2. Install dependencies
```bash
cd repo
npm install
```
3. Start the local development server
```bash
npm start
```

The application should now be running at `http://localhost:3000`.

## Tech Stack
- **React.js**
- **Framer Motion**
- **React-Tooltip**
- **SCSS**
- **Sanity.io**

## Contact
For any queries, feel free to reach out to me at bryangonzalez1896@icloud.com
