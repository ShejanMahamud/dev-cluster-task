# Dev Cluster Student Portal Task

## Features

- **Add Students:** Add new students to the portal.
- **Update Students:** Edit student information.
- **Delete Student:** Remove a student from the portal.
- **Filter Students:** Filter the list of students based on their roll number.
- **Search Students:** Search for students by their name.
- **Combined Filter and Search:** Search within the filtered list of students.
- **Pagination:** Display students in pages, with 5 students per page by default. (Please add at least 5 students to see pagination in action.)
- **Private Route and Google Login:** Secure the routes with authentication and allow login via Google.

## Challenges & Solutions

I had limited experience with Redux Toolkit before starting this project. Through documentation and tutorial videos, I was able to learn and implement it effectively.

## Technologies Used

- **React**
- **Redux**
- **Tailwind CSS**
- **Firebase**
- **Redux Persist**

## Running the Project

1. Clone the repository:
   ```sh
   git clone https://github.com/ShejanMahamud/dev-cluster-task.git
   cd dev-cluster-task
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=""
   VITE_FIREBASE_AUTH_DOMAIN=""
   VITE_FIREBASE_PROJECT_ID=""
   VITE_FIREBASE_STORAGE_BUCKET=""
   VITE_FIREBASE_MESSAGING_ID=""
   VITE_FIREBASE_APP_ID=""
   ```

4. Run the project locally:
   ```sh
   npm run dev
   ```

5. Build the project:
   ```sh
   npm run build
   ```

## Live Demo

Check out the live demo [here](https://dev-cluster.vercel.app/).

---

Thank you for visiting!

