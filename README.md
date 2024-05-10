# Oudtshoorn

This Fastify application integrates fastify-oauth2 and fastify-jwt to create a robust backend API server, powered by
MongoDB for efficient data storage. The primary focus is on providing a smooth authentication experience for users. By
incorporating OAuth2 authentication mechanisms from Google, Discord, Facebook, GitHub, GitLab, and traditional email
addresses, the app ensures versatility and accessibility. Users can seamlessly authenticate using their preferred
platform or email, enhancing user engagement and satisfaction. This setup not only simplifies the authentication process
but also offers a secure and scalable solution for modern web applications.

## Requirement

- [Docker](https://docs.docker.com/install)

## Setup

- Clone the repository

```bash
git clone git@github.com:longbowou/Oudtshoorn.git
```

- Build the application

```bash
docker compose build
```

- Update environments variable

```bash
cp .env.example .env
```

- Install dependencies

```bash
docker compose run --rm app pnpm install
```

- Compiles and minifies for production

```bash
docker compose run --rm app pnpm build
```

## Where is the application running?

- App - [http://localhost:8000](http://localhost:8000)

## License

This project is licensed under the [MIT License](LICENSE).
