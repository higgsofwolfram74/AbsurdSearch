from django.db import models

# Create your models here.
class Words(models.Model):
    words = models.CharField(max_length=100)