### GIT COMMIT MESSAGE

```text
Initialize movie discovery application

Scaffold project architecture using Vite and React 19.
Implement global state management via Context API for favorites logic
persisted to LocalStorage. Integrate TMDB API for data fetching and
search functionality. Establish basic routing and component structure
with raw CSS styling.
```

---

### README.md

```markdown
# Movie Discovery App

A frontend application for browsing, searching, and managing favorite movies, built with React and the TMDB API.

## Architecture

- **Framework:** React 19 (Vite)
- **Routing:** React Router DOM v7
- **State Management:** Context API + LocalStorage
- **Styling:** CSS Modules / Raw CSS
- **Data Source:** The Movie Database (TMDB) API

## Features

- **Discover:** View popular movies on the landing page.
- **Search:** Real-time query capability for the TMDB catalog.
- **Favorites:** Persist liked movies locally via `MovieContext`.
- **Responsive:** Mobile-first grid layout.

## Setup & Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd frontend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Create a `.env` file in the root directory:
    ```env
    VITE_API_KEY=your_tmdb_api_key_here
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```