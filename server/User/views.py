from django.shortcuts import render
from rest_framework import generics
from User.models import User
from User.serialize import UserSerializer
from rest_framework.decorators import api_view  
from rest_framework.response import Response
from User.filter import UserFilter

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@api_view(['POST'])
def sepUser(request):
    specUser = User.objects.all().filter(pk=request.data['pk'])
    seralizer = UserSerializer(specUser,many=True)

    return Response (seralizer.data)
# class ProviderUserList(generics.ListCreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = ProviderUserSerializer
