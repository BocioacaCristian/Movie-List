# Movie Discovery App

A production-grade frontend application for browsing, searching, and managing favorite movies. Built with React 19, standardized CSS architecture, and the TMDB API.

## Architecture

- **Framework:** React 19 (Vite)
- **Routing:** React Router DOM v7
- **State Management:** Context API + LocalStorage persistence
- **Styling:** CSS Modules with responsive strategies
- **Data Layer:** Service-based architecture with Fetch API
- **Source:** The Movie Database (TMDB)

## Features

- **Dynamic Discovery:** Browse popular movies with **pagination support**.
- **Deep Search:** Real-time querying of the TMDB catalog.
- **Detailed Views:** Dedicated route for movie metadata, genres, and overview.
- **Favorites System:** Persist liked movies locally via global `MovieContext`.
- **Responsive UI:** Adaptive grid layouts and navigation for mobile, tablet, and desktop.

## Setup & Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
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

5.  **Build for Production**
    ```bash
    npm run build
    ```
