from django.db import models
from Location.models import City
from Category.models import Category
from accounts.models import UserAccount
# from schedule.models import Schedule
class ServiceProvider(models.Model):
    provider = models.OneToOneField(UserAccount,on_delete=models.CASCADE, related_name='Provider')
    phone =models.CharField(max_length=12,default='0000')
    city = models.ForeignKey(City,on_delete=models.CASCADE,related_name='serviceProviders')
    role = models.CharField(max_length=20,default='ServiceProvider')
    categoryId = models.ForeignKey(Category, on_delete=models.CASCADE,default=1,related_name='providers')
    picture = models.CharField(max_length=256)
    # reservations = models.ManyToManyField(Schedule)
    def __str__(self):
        return self.provider.name


class CategoryProvider(models.Model):
    serviceProvider = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE,related_name='Categories')
    def __str__(self):
        return self
# class CategoryProvider(models.Model):
#     categoryId = models.ForeignKey(Category, on_delete=models.CASCADE,default=1,related_name='providers')
#     serviceProviderId = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE,related_name='Categories')
#     class Meta:
#         unique_together = ('categoryId','serviceProviderId')

#     def __str__(self):
#         return "%s %s" % (self.categoryId.catName, self.serviceProviderId.provider.name)
    

     
class Image(models.Model):
    images = models.CharField(max_length=256)
    serviceProvider = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE) # connect provider with it's images.
    def __str__(self):
        return self

     




