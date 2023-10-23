from django.contrib import admin

# Register your models here.
from bookshop_backend_demo.books.models import Book


class BookModelAdmin(admin.ModelAdmin):
    pass

admin.site.register(Book, BookModelAdmin)
