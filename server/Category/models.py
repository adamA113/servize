from django.db import models
# from Location.models import City
class Category(models.Model):
    catName = models.CharField(max_length=20,default='put your name ', unique=True)
    catImage = models.CharField(max_length=256,default='put ypur image ')
<<<<<<< HEAD
=======
   
>>>>>>> 31f0bc457ba0c5747068fe5f26842ca70ac48807

    def __str__(self):
        return self.catName

     

