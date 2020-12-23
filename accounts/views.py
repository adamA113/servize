from django.shortcuts import render
from rest_framework import generics
from users.models import UserAccount
from users.serializers import UserSerialize

# Create your views here.
class UserList(generics.ListAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerialize