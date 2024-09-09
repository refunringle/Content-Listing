# Content Listing

Welcome to the Content Listing project! This NextJs application showcases a listing grid with lazy loading and client-side search functionalities. Below you will find comprehensive instructions for setting up, running, and understanding the project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Design Requirements](#design-requirements)
- [Functional Requirements](#functional-requirements)
- [Technical Details](#technical-details)
- [Development Guidelines](#development-guidelines)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd content-listing
npm install
```

## Usage

To run the development server and see the project in action, use the following command:

To start the server, use:

```bash
npm run dev
```

To build the project for production, use:

```bash
npm run build
```

### Live Demo

Use this Url for live demo:

```bash
https://content-listing-ky2gnnpyr-refunringles-projects.vercel.app/
```

## Design Guidelines

Mobile Portrait View: The application is designed exclusively for mobile portrait view. Desktop or landscape dimensions are not considered.

Grid Layout: Displays three columns with even padding and adapts to various mobile resolutions.

Scroll Bars: Vertical scrolling is supported with no visible scroll bars. Horizontal scrolling is restricted.

Font: Use the global font Titillium Web.

Thumbnail Aspect Ratio: Maintain a 2:3 aspect ratio for thumbnails.

Background Color: #171717

Text Color: #FFFFFF

## Functional Overview

Vertical Scrolling: Supports vertical scrolling with restricted horizontal scrolling.

Lazy Loading: Gradually loads content as the user scrolls down. Initial data loads on page load, with additional data loaded as needed.

Client-Side Search: Enables search functionality that filters the currently displayed data without requiring page refreshes.

## Technical Details

Base API URL: https://test.create.diagnal.com/

Data API Pages: Access data via /data/ (e.g., page1.json)

Images API: Access images via /images/ (e.g., poster1.jpg)

The Images API provides necessary images for the test, including UI elements and poster images.

## Installed Packages

The following are the key packages and dependencies used in this project:

@heroicons/react: A set of free high-quality icons for React applications.

@mui/material: Material-UI, a popular React UI framework.

axios: A promise-based HTTP client for making requests to APIs.

swr: A React hook for data fetching, supporting caching, revalidation, and more.

tailwind CSS: A utility-first CSS framework for building responsive and highly customizable user interfaces. Used for styling across the application.

## Development Guidelines

Pixel-Perfect Design: Ensure features closely match the provided design specifications.

Code Structure: Adhere to best practices for code organization and structure.

NextJs Concepts: Demonstrate proficiency with NextJs concepts, page routing, including components, state, props, caching, server side rendering, and hooks.

Edge Cases: Handle edge cases effectively, particularly for items on Page 3.

Performance Optimization: Optimize performance with techniques like code splitting, lazy loading, and memoization.

API Integration: Integrate with the provided backend APIs, managing asynchronous operations using libraries like Axios.

## Contributing

Contributions are welcome! Please submit pull requests with improvements or bug fixes. Ensure that changes follow the project's coding standards and guidelines.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://NextJs.org/).

## License

This project is licensed under the MIT License. See the LICENSE file for details.
