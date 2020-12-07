from django.db import models

class Category(models.Model):
    catName = models.CharField(max_length=20,default='put your name ')
    catImage = models.URLField(max_length=256,default='put ypur image ')
    def __str__(self):
        return self.catName

     

