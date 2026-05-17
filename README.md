# CI/CD React Learning App

This is a simple React + Vite project made for learning CI/CD with GitHub Actions and Docker.
It keeps the UI small and clear so the focus stays on the workflow, testing, and container setup.

The app currently shows a single component with the heading `Learning Docker and CI/CD`.

## Project Goals

- Learn React basics with a very small app.
- Practice local testing and build checks.
- Package the app with Docker.
- Use GitHub Actions for continuous integration and future deployment steps.

## Project Workflow

1. Make a code change in the React app.
2. Run the local checks.
3. Build the production app.
4. Build the Docker image.
5. Run the container and verify the app in a browser.
6. Automate the same checks in GitHub Actions on every push or pull request.

## Run Locally

Install dependencies and start the Vite dev server:

```bash
npm install
npm run dev
```

## Test

Run the test file for the learning component:

```bash
npm test
```

## Build

Create a production build:

```bash
npm run build
```

## Run With Docker

This project includes a `Dockerfile` that builds the React app and serves the output with Nginx.

Build the image:

```bash
docker build -t ci-cd-react .
```

Run the container:

```bash
docker run --rm -p 8080:80 ci-cd-react
```

Open the app in your browser:

```bash
http://localhost:8080
```

## GitHub Actions Workflow Idea

This project is a good practice repo for learning CI/CD with GitHub Actions.
A simple workflow can:

- install dependencies
- run `npm run lint`
- run `npm test`
- run `npm run build`
- build the Docker image
- optionally push the image to a registry

## Project Structure

- `src/` React source code
- `test/` test files
- `Dockerfile` production container image
- `package.json` scripts and dependencies
