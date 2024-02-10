.PHONY: build-development
build-development: ## Build the development docker image.
	docker network rm my_network -f
	docker network create my_network
	docker compose -f docker/development/docker-compose.yml build

.PHONY: start-development
start-development: ## Start the development docker container.
	docker compose -f docker/development/docker-compose.yml up

.PHONY: stop-development
stop-development: ## Stop the development docker container.
	docker compose -f docker/development/docker-compose.yml down

.PHONY: build-production
build-production: ## Build the production docker image.
	docker network rm my_network -f
	docker network create my_network
	docker compose -f docker/production/docker-compose.yml build

.PHONY: start-production
start-production: ## Start the production docker container.
	docker compose -f docker/production/docker-compose.yml up -d

.PHONY: stop-production
stop-production: ## Stop the production docker container.
	docker compose -f docker/production/docker-compose.yml down

.PHONY: free-space
free-space: ## Free space.
	docker system prune -af

.PHONY: stop-all
stop-all:
	docker kill $(docker ps -aq) && docker rm $(docker ps -aq)
