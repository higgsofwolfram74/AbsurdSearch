from django.db import models

# Create your models here.
class Words(models.Model):
    #words stored as {words: [List of words]} to pop out without using static txt file
    words = models.JSONField()