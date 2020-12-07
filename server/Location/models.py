from django.db import models


class City(models.Model):
    name =  models.CharField(max_length=20)
    def __str__(self):
        return self.name


class Area(models.Model):
    name =  models.CharField(max_length=20)
    City = models.ForeignKey(City,on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    
   
