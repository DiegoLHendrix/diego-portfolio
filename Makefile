# Makefile

# Load environment variables from .env file
ifneq ("$(wildcard .env)","")
    include .env
    export
endif

.PHONY: venv run down clean port update wipe 

MAKEFLAGS += --no-print-directory

all: run

venv: down
	rm -rf __pycache__
	rm -rf venv
	@echo "Creating a new virtual environment..."
	python -m venv venv
	venv/Scripts/python.exe -m pip install --upgrade pip
	pip install -r requirements.txt

run: down
	@echo "Starting Docker containers..."
	@docker-compose up --build -d

down:
	@docker-compose down
	@echo "Docker containers stopped."

port:
	@PORT_OUTPUT=$$(docker-compose port web 8000) && \
	echo "Port output: $$PORT_OUTPUT" && \
	PORT=$$(echo $$PORT_OUTPUT | cut -d':' -f2) && \
	echo "Extracted port: $$PORT" && \
	echo "Website is running at ***** http://localhost:$$PORT *****"

update:
	@echo "Activating virtual environment, updating pip, and updating Docker image..."
	@venv/Scripts/deactivate.bat
	@. venv/Scripts/activate
	@venv/Scripts/python.exe -m pip install --upgrade pip && \
	docker login && \
	docker build -t ${USERNAME}/${IMAGE}:${TAGNAME} . && \
	docker push ${USERNAME}/${IMAGE}:${TAGNAME}

wipe: down
	@if [ $$(docker ps -aq) ]; then \
		docker stop $$(docker ps -aq); \
		docker rm $$(docker ps -aq); \
	else \
		echo "No containers to stop or remove."; \
	fi
	@if [ $$(docker images -q | wc -l) -gt 0 ]; then \
		docker rmi $$(docker images -q); \
	else \
		echo "No images to remove."; \
	fi
	@if [ $$(docker volume ls -q | wc -l) -gt 0 ]; then \
		docker volume rm $$(docker volume ls -q); \
	else \
		echo "No volumes to remove."; \
	fi

	@docker container prune -f
	@docker image prune -a -f
	@docker volume prune -f
	@docker builder prune -f --all

	rm -rf __pycache__
	rm -rf venv