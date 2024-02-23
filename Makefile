.PHONY: up-development
up-development: ## Start the development docker container.
	docker compose -f docker/development/docker-compose.yml up --build

.PHONY: down-development
down-development: ## Stop the development docker container.
	docker compose -f docker/development/docker-compose.yml down

.PHONY: up-production
up-production: ## Start the production docker container.
	docker compose -f docker/production/docker-compose.yml up -d --build

.PHONY: down-production
down-production: ## Stop the production docker container.
	docker compose -f docker/production/docker-compose.yml down

.PHONY: free-space
free-space: ## Free space.
	docker system prune -af

.PHONY: stop-all
stop-all:
	docker kill $(docker ps -aq) && docker rm $(docker ps -aq)
