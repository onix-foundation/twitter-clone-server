
# Twitter Clone Server

Make-it Real Fullstack Project - Pro-Innovate 2024  
**Server**: TypeScript, Express, Prisma, PostgreSQL

## Table of Contents

- [Twitter Clone Server](#twitter-clone-server)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Contributing and Development Workflow](#contributing-and-development-workflow)
    - [Branch Structure](#branch-structure)
  - [1. **Cloning the Repository**](#1-cloning-the-repository)
  - [2. **Creating a Feature Branch**](#2-creating-a-feature-branch)
  - [3. **Developing and Committing**](#3-developing-and-committing)
    - [Commit Messages](#commit-messages)
    - [Committing Best Practices](#committing-best-practices)
  - [4. **Pushing the Feature Branch**](#4-pushing-the-feature-branch)
  - [5. **Creating a Pull Request (PR)**](#5-creating-a-pull-request-pr)
    - [PR Guidelines](#pr-guidelines)
  - [6. **Merging into `development`**](#6-merging-into-development)
  - [7. **End of Sprint: Merging `development` into `main`**](#7-end-of-sprint-merging-development-into-main)
  - [8. **General Rules for Developers**](#8-general-rules-for-developers)
  - [9. **Versioning**](#9-versioning)
  - [10. **Conflict Resolution**](#10-conflict-resolution)
  - [Project Structure](#project-structure)
  - [Team](#team)
  - [License](#license)

## Project Overview

This project is the server-side implementation of a Twitter-style web application, built as part of the **Make-it Real Fullstack Project - Pro-Innovate 2024**. The server provides RESTful APIs for user authentication, tweet management, social interactions, and more. It is built using **TypeScript**, **Express**, **Prisma**, and **PostgreSQL**, following the principles of **Clean Architecture** to ensure scalability and maintainability.

- [Jira Dashboard](https://lenguajesdeprogramacionusb.atlassian.net/jira/software/projects/TC/boards/1/backlog)

The **server** of the project is developed using **TypeScript**, **Express**, and **Prisma**.

## Features

- User authentication and authorization (JWT)
- CRUD operations for tweets, replies, and retweets
- Like and comment functionalities
- Follow and unfollow users
- Real-time updates using WebSockets (optional)
- Database management with Prisma ORM
- Clean Architecture for scalable code structure

## Tech Stack

- **TypeScript**: Strongly typed JavaScript
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for Node.js
- **Prisma**: ORM for database access
- **PostgreSQL**: Relational database
- **Jest/Supertest**: For testing APIs
- **ESLint/Prettier**: For code linting and formatting
- **Docker**: Containerization (if applicable)

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 14.x or higher)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/download/) (version 12 or higher)
- [Docker](https://www.docker.com/) (optional, if using Docker)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/onix-foundation/twiter-clone-server.git
   cd twiter-clone-server`` 

2.  Install dependencies:
    
    ```bash
    npm install
    
3.  Set up environment variables:
    
    -   Copy `.env.example` to `.env` and fill in the required values.
        
```bash
cp .env.example .env` 
```
* Configure your database connection string and any other required environment variables.
4.  Run database migrations:
    
    ```bash
    npx prisma migrate dev
5.  Start the development server:
    
```bash
npm run dev
``` 

6.  The server should now be running at http://localhost:3000/.
    

## Contributing and Development Workflow

### Branch Structure

-   **`main` branch**: This is the **production** branch. Only stable, production-ready code is merged into this branch.
-   **`development` branch**: The **integration branch** where all new features are merged before moving to production. It should always be in a deployable state.
-   **Feature branches**: Each new feature, bug fix, or improvement should be developed in its **own branch**, created from `development`. These branches will be merged back into `development` upon completion and code review.

----------

## 1. **Cloning the Repository**

Before you start working, clone the repository locally:


```bash
git clone https://github.com/onix-foundation/twiter-clone-server.git
cd twiter-clone-server` 
```
----------

## 2. **Creating a Feature Branch**

When starting a new feature or bug fix, always create a branch from the `development` branch. Use descriptive branch names that follow the format `feature/` or `bugfix/`:

1.  Make sure you’re on the latest `development` branch:
    
```bash
    git checkout development
    git pull origin development` 
```
2.  Create a new branch for your feature:
    
  ```bash
  git checkout -b feature/your-feature-name` 
```
Or, for a bug fix:
    
```bash
git checkout -b bugfix/your-bug-description` 
 ```

----------

## 3. **Developing and Committing**

### Commit Messages

-   Use **meaningful commit messages** that clearly explain what the commit does.
    
-   Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard for commit messages:
    
    -   `feat`: A new feature
    -   `fix`: A bug fix
    -   `chore`: Changes to the build process or auxiliary tools
    -   `refactor`: Code refactoring without adding features or fixing bugs
    -   `docs`: Documentation-only changes
    -   `style`: Code style changes (formatting, no changes in logic)
    -   `test`: Adding or updating tests
    
    Example:
    
```bash
git commit -m "feat: implement user authentication with JWT"` 
```    

### Committing Best Practices

-   Make sure to **commit frequently** to keep track of your changes.
-   Before committing, **run tests locally** to ensure everything works as expected.
-   Use **small, atomic commits** for better traceability and easier review.

----------

## 4. **Pushing the Feature Branch**

Once you're ready to push your feature branch to the remote repository, use the following commands:


```bash
git push origin feature/your-feature-name` 
```
For bug fixes:

```bash
git push origin bugfix/your-bug-description` 
```
----------

## 5. **Creating a Pull Request (PR)**

Once your feature or bug fix is complete and thoroughly tested, create a **Pull Request** to merge your branch into `development`.

### PR Guidelines

1.  **Base branch**: Set the base branch to `development` for your pull request.
2.  **PR Title**: Use a descriptive title, referencing the feature or bug fix.
3.  **PR Description**:
    -   Include a summary of changes.
    -   Reference the related Jira ticket or issue.
    -   Add any relevant information or context.
4.  **Jira Story**: Make sure to include the Jira story number and link in the PR.
    -   Example: `[TC-1234](https://lenguajesdeprogramacionusb.atlassian.net/browse/TC-1234)`
5.  **Request Reviewers**: Assign appropriate reviewers for your PR.

Once approved, merge the branch into `development`.

----------

## 6. **Merging into `development`**

-   Once your pull request is **approved** and the feature is fully tested, it can be merged into the `development` branch.
-   Use **squash and merge** to ensure that all related commits are squashed into a single, meaningful commit.

----------

## 7. **End of Sprint: Merging `development` into `main`**

At the end of the sprint, once all features have been merged into `development` and tested, the `development` branch will be merged into `main`.

1.  **Create a release branch** from `development` to prepare for the merge:
    
```bash
git checkout -b release/sprint-xx` 
```    
2.  **Test** the release branch thoroughly and fix any bugs.
    
3.  Once tested and approved, merge the release branch into `main`:
    
```bash
git checkout main
git merge release/sprint-xx` 
```    
4.  **Tag the release** with a version number:
    
```bash
    `git tag -a v1.0.0 -m "Sprint xx release"
    git push origin v1.0.0` 
``` 
5.  Merge the release branch back into `development` to keep both branches in sync:

```bash
git checkout development
git merge release/sprint-xx` 
```    

----------

## 8. **General Rules for Developers**

1.  **Stay Updated**:
    
    -   Always **pull the latest changes** from `development` before starting any new work.
    -   Regularly **fetch and rebase** your feature branch to keep it up-to-date with `development`.
2.  **Code Quality**:
    
    -   Ensure all code is **well-documented** and **follows the coding standards**.
    -   Write **unit tests** and **integration tests** for every feature or bug fix.
    -   Run **ESLint** and **Prettier** to ensure consistent code formatting.
    -   Avoid pushing **broken or incomplete code** to any branch.
3.  **Code Reviews**:
    
    -   Every pull request must be **reviewed by at least one team member**.
    -   **Respect feedback** from code reviews and address the requested changes promptly.
4.  **Branch Naming Conventions**:
    
    -   Use the following branch naming conventions:
        -   Features: `feature/feature-name`
        -   Bug Fixes: `bugfix/bug-description`
        -   Hotfixes: `hotfix/hotfix-description`
        -   Releases: `release/sprint-xx`
5.  **Emergency Hotfixes**:
    
    -   In case of an emergency, a **hotfix** branch can be created from `main`:
        
```bash
git checkout -b hotfix/issue-description` 
```
        
-   Once the hotfix is applied, merge the hotfix into both `main` and `development` branches.
        

----------

## 9. **Versioning**

-   Follow [Semantic Versioning](https://semver.org/) (e.g., `v1.0.0`) for all releases.
-   Increment the version numbers for every major release:
    -   **Major**: Incompatible changes
    -   **Minor**: Backward-compatible new features
    -   **Patch**: Backward-compatible bug fixes

----------

## 10. **Conflict Resolution**

-   Always try to resolve conflicts locally in your feature branch before pushing.
-   If you encounter conflicts when merging to `development` or `main`, communicate with the team to resolve them collaboratively.

----------

## Project Structure


```bash
`/src
	/context
	  /application     # Use cases and business logic
	  /domain          # Domain models and interfaces
	  /infrastructure
  /database      # Database connection and Prisma setup
    /repositories  # Data access implementations
  /interfaces
    /app          # Express controllers and routes
  /config          # Configuration files (env variables, etc.)
  /tests           # Unit and integration tests
/index.ts            # Entry point of the application` 
```
## Team

-   **Mentor**: Shymmy Garcia
-   **Team Members**:
    -   [Member 1] // Update your name here
    -   [Member 2]
    -   [Member 3]
    -   [Member 4]

## License

This project is licensed under the [MIT License](LICENSE).