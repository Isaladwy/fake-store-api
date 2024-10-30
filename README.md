# ELEVATE TECH E-commerce Product Listing Page

This project is a simple e-commerce product listing page built with React.js and Tailwind CSS for ELEVATE TECH. It uses the Fake Store API to fetch and display a list of products in a responsive grid format, including an image, title, price, and rating for each product.

## Features

- **Responsive Product Cards**: Each product is displayed in a responsive card format using CSS Grid and Flexbox.
- **Loading Indicator**: A loading message appears while data is being fetched from the API.
- **Error Handling**: If the data fetch fails, an error message is displayed.

## Approach

1. **Fetching Data**: Used `useEffect` to fetch data from the Fake Store API upon initial render.
2. **State Management**: Managed `loading`, `error`, and `products` states to handle the data fetching lifecycle.
3. **Responsive UI with Tailwind CSS**: Built a responsive, mobile-friendly layout using Tailwind CSS classes.
4. **Error Handling**: Basic error handling was implemented to display a message in case of a fetch failure.

## Challenges

- **Handling API Response**: Ensuring error messages are displayed when there’s a network issue or if the API fails.
- **Responsive Layouts**: Ensuring the design works well across mobile, tablet, and desktop screen sizes using Tailwind’s responsive classes.
