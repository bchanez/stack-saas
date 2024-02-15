# With Docker Compose

Based on https://github.com/ixartz/Next-js-Boilerplate

## Prerequisites using Docker and Makefile

Install [Docker Desktop](https://docs.docker.com/get-docker) for Mac, Windows, or Linux. Docker Desktop includes Docker Compose as part of the installation.


### Development environment

```bash
make build-development
make start-development
```

Open [http://localhost:3001](http://localhost:3001).

### Production environment

```bash
make build-production
make start-production
```

Open [http://localhost:3002](http://localhost:3002).


## Useful commands

```bash
# Stop all running containers
make stop-all

# Free space
make free-space
```
