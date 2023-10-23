from django.shortcuts import render
# Create your views here.
from rest_framework.authentication import TokenAuthentication
from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated

from bookshop_backend_demo.books.models import Book
from bookshop_backend_demo.books.serializators import BooksSerializer


class UserBooksList(ListCreateAPIView):

    serializer_class = BooksSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        # Access the currently authenticated user
        user = self.request.user

        # Use the user to filter the queryset if needed
        queryset = user.set_books.all()

        return queryset


