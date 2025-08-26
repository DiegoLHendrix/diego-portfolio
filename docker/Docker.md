# Docker commands

## Run

- docker compose up --build -d : Builds and runs a docker image.

## Stop

- docker compose down : Stops all docker currently running docker containers.

- docker compose down --remove-orphans

## Clean

- docker system prune -a -f --volumes : Closes and deletes all containers, images, builds, and volumes.
