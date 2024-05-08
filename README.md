# Dockerized Simple React Application

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/RajonKobir/React-TypeScript-Routing
   cd React-TypeScript-Routing
   ```

2. **Build the Docker Image For the First Time:**

Build the Docker image using the following command:

```bash

docker build -t quivato:dev .
```
Replace "quivato" with a suitable image name.
Run the Docker Container:

Run the Docker container using the following command:

```bash
docker run -p 5173:5173 quivato:dev

```

This maps port 5173 on your local machine to port 5173 in the Docker container.

Access Your React Application:

Open your web browser and navigate to **http://localhost:5173** to view your React application running inside a Docker container.

### Customization

If your React app uses a different port, update the **EXPOSE** and **docker run** commands accordingly.

Modify the Dockerfile to suit your specific project structure and dependencies.

Consider using a **.dockerignore** file to exclude unnecessary files and directories from being copied into the Docker image.

### Additional Resources

- [Docker Documentation](https://docs.docker.com/get-docker/)
- [React Documentation](https://react.dev/)

Feel free to contribute to this repository by opening issues or creating pull requests. Happy Dockerizing!