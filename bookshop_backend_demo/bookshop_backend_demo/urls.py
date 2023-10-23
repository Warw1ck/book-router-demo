from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('bookshop_backend_demo.authentification.urls')),
    path('api/books/', include('bookshop_backend_demo.books.urls'))

]
