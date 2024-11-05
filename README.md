# Next.js Data Visualization Project

This is a data visualization project built with [Next.js](https://nextjs.org) using [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). The application visualizes footfall data using charts and a map, providing an interactive experience for users.

### Objective
Build a data visualization app (preferably) in Next.js to render data from a provided CSV file, using a calendar to filter data by date range.
Bonus: Display a map with the provided Geospatial context

### PROJECT REQUIREMENTS
The application should use modern coding practices (preferably in React JS & Next JS), appealing UI, useful UX, user feedback if something goes wrong and responsive interface.
* Load initial data from the provided .csv file.
* Render data on the root page with options for two chart types:
1. Bar Chart: Display daily values.
2. Line Chart: Show trends over the chosen date range.
* Implement a toggle for "raw" vs. "normalized" data.
1. Raw: Shows actual daily values.
2. Normalized: Adjusts data so the highest day reaches 100%, making it easier to spot trends.
* Display daily records with color indicators:
1. Green: If the footfall is above the yearly average.
2. Red: If the footfall is below the yearly average.
Bonus: Below the graph chart or on a separate page, showcase a map displaying a real-world example of GeoJSON data. Each area should have a unique name displayed at the top of the area.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. You can verify your installation by running:

```bash
node -v
```
Clone the repository:
```bash
git clone https://github.com/athanasso/Ariadne-assessment.git
```
Install the dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
Running the Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open http://localhost:3000 with your browser to see the result.

## Project Structure
```
├── components          # React components for various parts of the application
├── hooks               # Custom hooks for data processing
├── pages               # Next.js pages
├── utils               # Utility functions (e.g., CSV loader)
├── assets              # Static assets (images, GeoJSON files, etc.)
├── public              # Public static files served directly
├── styles              # Global styles (including Tailwind CSS)
├── tailwind.config.js  # Tailwind CSS configuration file
└── package.json        # Project metadata and dependencies
```

## Technologies Used
* Next.js: A React framework for server-rendered applications.
* React: A JavaScript library for building user interfaces.
* TypeScript: A typed superset of JavaScript for building robust applications.
* Tailwind CSS: A utility-first CSS framework for rapid UI development.
* Chart.js: A library for rendering charts.
* React-Leaflet: A library for integrating Leaflet maps into React applications.
* CSV Loader: A utility for loading CSV data into the application.

## Usage
After starting the development server, navigate to the home page where you can:

1. Use the calendar filter to select a date range for the footfall data.
2. Choose between line and bar chart visualizations.
3. Toggle between raw and normalized data displays.
4. View geographical data on an interactive map.

## Features

- **Data Visualization**: Displays footfall data using line and bar charts.
- **Map Display**: Integrates `react-leaflet` to show geographical data on a map using GeoJSON.
- **Date Range Filtering**: Allows users to filter data by date range using a calendar input.
- **Responsive Design**: Utilizes Tailwind CSS for a modern, responsive user interface.

## Sample Output
![screenshot image](Screenshot.png)
