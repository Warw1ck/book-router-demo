from django.urls import path, include

import bookshop_backend_demo.books.views

urlpatterns = [
    path('', bookshop_backend_demo.books.views.UserBooksList.as_view()),
]