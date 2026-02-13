"""
# 1️⃣ Python / Virtual Environment (local)
python -m venv myenv                # create a virtual environment
myenv\Scripts\activate              # activate venv (Windows)
pip install django                   # install Django locally
django-admin startproject myproject .  # create Django project in current folder (dot is important!)
python manage.py runserver  or command         # run local development server

# 2️⃣ Docker / Docker Compose Basics
docker build .                       # build Docker image from Dockerfile
docker-compose build                  # build all services from docker-compose.yml
docker-compose up                     # start containers and run commands defined in compose
docker-compose down                   # stop and remove containers
docker-compose run --rm app sh -c "command"  # run one-time command in container (e.g., startproject)

# Tips:
# --rm  -> remove container after it exits
# sh -c "command" -> allows shell commands inside container

# 3️⃣ Django Commands (inside container or local)
django-admin startproject app .       # create Django project inside container
python manage.py migrate              # apply database migrations
python manage.py createsuperuser      # create admin user
python manage.py runserver 0.0.0.0:8000  # run server in container and expose to host
python manage.py startapp appName   #starts app

#to run through docker:
docker-compose run --rm app sh -c "python manage.py test"

#migrations
 python manage.py makemigrations
 migrate

 #to check db
 docker volume ls

 4) set up posgresql database:
 DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',   # PostgreSQL backend
        'HOST': os.environ.get('DB_HOST'),           # Database host (Docker service name)
        'NAME': os.environ.get('DB_NAME'),           # Database name
        'USER': os.environ.get('DB_USER'),           # Database user
        'PASSWORD': os.environ.get('DB_PASS'),       # Database password
        # PORT not required (defaults to 5432)
    }
}
    """