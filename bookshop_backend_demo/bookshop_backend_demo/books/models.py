from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Book(models.Model):
    User = models.ForeignKey(User, on_delete=models.CASCADE, related_name='books')
    Title = models.CharField(max_length=12)
    Author = models.CharField(max_length=12)