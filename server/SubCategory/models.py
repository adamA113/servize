from django.db import models
from Category.models import Category


class SubCategory(models.Model):
    subName =  models.CharField(max_length=50,default='sub category name ')
    subImage = models.CharField(max_length=256,default='you should put url for your image')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    def __str__(self):
        return self.subName
      
      

