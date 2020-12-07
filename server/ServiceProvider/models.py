from django.db import models
from SubCategory.models import SubCategory
from Location.models import City,Area

class ServiceProvider(models.Model):
    name  = models.CharField(max_length=20,default='put your name')
    phone =models.CharField(max_length=12,default='0000')
    email = models.EmailField(max_length=255, unique=True)
    status = models.BooleanField(default=False)
    city = models.ForeignKey(City,on_delete=models.CASCADE)
    area = models.ForeignKey(Area,on_delete=models.CASCADE)
    # //RGISTRATION AS AFORIGN KEY 
    def __str__(self):
        return self


class CategoryProvider(models.Model):
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE,default=1)
    serviceProvider = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE)
    def __str__(self):
        return self

     
class Image(models.Model):
    images = models.URLField()
    servicProvider = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE) # connect provider with it's images.
    def __str__(self):
        return self

     




