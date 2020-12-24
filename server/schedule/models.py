from django.db import models
from django.urls import reverse
from User.models import User
from ServiceProvider.models import ServiceProvider


class Schedule(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    provider = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE)
    # StartTime = models.DateTimeField(auto_now=False, auto_now_add=False)
    # EndTime = models.DateTimeField(auto_now=False, auto_now_add=False)
    bookDate = models.DateField(unique=True)
    Subject = models.CharField(max_length=20, unique=True)
    def __str__(self):
        return self.Subject
    