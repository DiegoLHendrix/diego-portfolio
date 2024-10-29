# venv commands
source venv/Scripts/activate
pip install -r requirements.txt

# Run the Django project
# python manage.py runserver

# Run docker
docker-compose down
docker-compose up --build -d