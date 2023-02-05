# Postgress

```sh
cd ./api

POSTGRES_USER=username POSTGRES_PASSWORD=password POSTGRES_PORT=5432 COMPOSE_FILE=docker-compose-postgress.yml docker-compose up -d
```

or

```sh
docker run --name lead_api_postgres -e POSTGRES_PASSWORD=password -e POSTGRES_USER=username -p 5432:5432 -d postgres
```
