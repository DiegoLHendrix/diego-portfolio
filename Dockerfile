# Use the official Python image from Docker Hub
FROM python:3.11-slim

# Set the working directory inside the container
WORKDIR /backend

# Copy the requirements.txt to the container
COPY requirements.txt /backend/

# Copy the Django project files into the container
COPY . /backend/

# Install the required dependencies
RUN python -m venv env /py && \
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install -r /requirements.txt

# Expose port 8000 for the Django app
EXPOSE 8000

# Command to run the Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
