# MOMENTUM PATIENT INFORMATION DASHBOARD

Directions

1. [Assignment Details](#assignment)
2. [Running App](#running-app)
3. [Decisions Made](#decisions-made)
4. [Resources Used](#resources-used)
5. [Future Plans](#future-plans)

---

## Assignment

Building a Basic Patient Information Dashboard with a 3D Visualizer

## Objective

Create a single-page application (SPA) using React JS that presents patient data, fetched from an API, in a visually clear and user-friendly manner. Additionally, the application should include a 3D visualizer using Three.js to display patient point cloud data.

## Task

### Create a mock API or use JSON placeholder:

Create a JSON file to simulate the responses an API would send for a user's basic info, video upload status, scoliosis prediction status, and point cloud data. This should include fields like name, age, gender, videoUploadStatus, scoliosisPredictionStatus, and pointCloudData. If you prefer, you can use an API placeholder like My JSON Server to host your mock data.

### Fetch and display data:

Write a React component that fetches this data and displays the basic patient information in an organized manner on the page. Make sure to handle loading and error states appropriately.

### 3D Point Cloud Visualization:

Using the fetched pointCloudData and Three.js (library), create a 3D point cloud visualization that displays when a user selects a patient. You can use React-Three-Fiber, a React renderer for Three.js, to integrate this into your React application. Please add some random 3D model/point cloud that you can find on the web.

### Interactivity and updates:

Add a feature where a user can manually refresh the videoUploadStatus, scoliosisPredictionStatus, and pointCloudData for a specific patient. The feature should be designed in a way that users can clearly see whether the data is being fetched or if an error has occurred.

### Styling and responsiveness:

Make the application responsive so that it maintains its layout on different screen sizes. Use Tailwind for basic styling.

## Deliverable

The final output should be a GitHub repository containing:

- The complete code for the SPA.
- A README.md file explaining how to install and run the application.
- Documentation within the code explaining any important decisions and any challenges you faced.

---

## Running App

- app built using react and threejs
- run `npm install`, then `npm start`
- user list visible as individual cards
- can see user info like name, age, gender
- icons to see status, can refresh status
- when refreshing, other buttons are paused
- visual model button opens 3d model dialog
- can close dialog and view different user

## Decisions Made

- tried to use PCD, but very hard to find sample data
- ended up using 3d model glb files, lots of options
- most time spent in finding relevant visible models
- didn't have enough time to add in zooming controls
- used tailwind to create simple and responsive cards
- loaded 2 models to see which ones i can use regularly
- tried using more models, but it wasn't clear enough

## Resources Used

- https://www.mockaroo.com/ (for creating fake data sets of users)
- https://sketchfab.com/tags/glb (used this site to get new models)
- https://geoslam.com/sample-data/ (pcd files in different formats)
- https://my-json-server.typicode.com/ (live server to host database)
- https://github.com/coopercodes/3DModelShowcase (repo to render 3d model)
- https://codesandbox.io/s/three-fiber-point-cloud-6q2wh (sandbox on fiber)
- https://www.smashingmagazine.com/2020/11/threejs-react-three-fiber/ (blog)
- https://dev.to/maniflames/pointcloud-effect-in-three-js-3eic (pcd blog)
- https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular

## Future Plans

- add pagination on list
- use my own live server
- accordion to hide info
- need relevant pcd sets
- create actual user data
- render different models
- orbit controls for views
- see which user was open
- persist on click/update
