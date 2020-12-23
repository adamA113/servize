from django.db import models
from accounts.models import UserAccount,UserAccountManager
from ServiceProvider.models import ServiceProvider

class Reviews(models.Model):
    STAR_CHOICES = (
    ("1", "1"),
    ("2", "2"),
    ("3", "3"),
    ("4", "4"),
    ("5", "5"),
)
    stars = models.CharField(max_length=20, choices=STAR_CHOICES)
    user = models.ForeignKey(UserAccount,on_delete=models.CASCADE)
    servicProvider = models.ForeignKey(ServiceProvider,on_delete=models.CASCADE) 
    
      

     
 

