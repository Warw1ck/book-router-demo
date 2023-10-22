from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from bookshop_backend_demo.authentification.views import MyTokenObtainPairView


urlpatterns = [
    path('token/',
          MyTokenObtainPairView.as_view(),
          name ='token_obtain_pair'),
     path('token/refresh/',
          jwt_views.TokenRefreshView.as_view(),
          name ='token_refresh')
]