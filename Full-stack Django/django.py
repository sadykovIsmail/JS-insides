"""
# 1️⃣ Python / Virtual Environment (local)
python -m venv myenv                # create a virtual environment
myenv\Scripts\activate              # activate venv (Windows)
pip install django                   # install Django locally
django-admin startproject myproject .  # create Django project in current folder (dot is important!)
python manage.py runserver  or command         # run local development server
pip install django djangorestframework

# 2️⃣ Docker / Docker Compose Basics
docker build .                       # build Docker image from Dockerfile
docker-compose build                  # build all services from docker-compose.yml
docker-compose up                     # start containers and run commands defined in compose
docker-compose down                   # stop and remove containers
docker-compose run --rm app sh -c "command"  # run one-time command in container (e.g., startproject)
docker compose exec web python manage.py createsuperuser  # works when the server running

# Tips:
# --rm  -> remove container after it exits
# sh -c "command" -> allows shell commands inside container
1) docker-up
2) migrate
3) runserver
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
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_db_name',
        'USER': 'your_db_user',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

pip install psycopg2-binary

python manage.py makemigrations
python manage.py migrate

 5) JWT Authenticatin
 pip install djangorestframework-simplejwt

 REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
}

# for longer time
from datetime import timedelta

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(hours=1),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
}

# add to urls
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

 6) API Docs Swagger (drf-spectacular)
pip install drf-spectacular

# add to settings
INSTALLED_APPS = [
    ...
    'drf_spectacular',
]

REST_FRAMEWORK = {
    ...
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
}

# add to urls
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns += [
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema')),
]

 7) requirements.txt
# freeze to requirements
pip freeze > requirements.txt

#install from requirements
pip install -r requirements.txt

 8) image upload feature
1) install pillow : Pillow==10.4.0
2) add image to models
3) add media to settings
  MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"
4) create serializer
# serializers.py
class PostImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPostModel
        fields = ['id', 'image']
        read_only_fields = ['id']

5) add to views
# views.py

# Import 1: needed to parse file uploads
from rest_framework.parsers import MultiPartParser, FormParser

# Import 2: needed for the custom endpoint
from rest_framework.decorators import action

# Import 3: needed to fix Swagger UI showing the file picker
from drf_spectacular.utils import extend_schema


class BlogPostViews(viewsets.ModelViewSet):
    ...

    # Part A — switch serializer class based on the action
    def get_serializer_class(self):
        if self.action == "upload_image":
            return PostImageSerializer
        return self.serializer_class

    # Part B — fix Swagger UI (without this it shows text box instead of file picker)
    @extend_schema(
        request={
            "multipart/form-data": {
                "type": "object",
                "properties": {
                    "image": {"type": "string", "format": "binary"}
                },
                "required": ["image"],
            }
        }
    )
    # Part C — the actual custom endpoint
    @action(
        methods=["POST"],
        detail=True,              # True means /notes/{id}/upload-image/ (needs an ID)
        url_path="upload-image",  # the URL segment after the ID
        parser_classes=[MultiPartParser, FormParser],  # handles file data
    )
    def upload_image(self, request, pk=None):
        post = self.get_object()                        # fetch the object by pk
        serializer = self.get_serializer(post, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# in urls.py
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [...] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

#for nginx
location /media/ {
    alias /app/media/;
}

    """