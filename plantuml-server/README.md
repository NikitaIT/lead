# Plantuml Server

## WARN: DON'T USE PUBLIC SERVER

## Setup

First, you need to install [Docker Compose](https://docs.docker.com/compose/install/).

```bash
docker-compose up -d && docker-compose logs -f
```

If `zsh: command not found: docker-compose` and u have docker installed - just run docker and retry.

Go to `http://localhost:8089` to access it.

## VSCode jebbs.plantuml plugin

Setup in [.vscode/workspace.code-workspace](/.vscode/workspace.code-workspace)

```json
{
  "settings": {
    // plantuml-server
    "plantuml.render": "PlantUMLServer",
    "plantuml.server": "http://localhost:8089"
  }
}
```

## Curl

Use `localhost:8089/<lang>` to compile. See [plantuml-server/pull](https://github.com/plantuml/plantuml-server/pull/74).

```bash
curl -s -X POST --data-binary @mydb.plantuml -H "Content-Type:text/plain" localhost:8089/png > mydb.png
```

Path `@mydb.plantuml` same as `./mydb.plantuml`.

## AppSec

Disallow [include](https://github.com/plantuml/plantuml-server/issues/122)

## Sorce

- [automatically-generating-up-to-date-database-diagrams-with-typeorm](https://raphael-leger.medium.com/automatically-generating-up-to-date-database-diagrams-with-typeorm-d1279a20545e)
