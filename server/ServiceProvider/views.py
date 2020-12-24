from django.shortcuts import render
from rest_framework import generics 
from ServiceProvider.models import ServiceProvider,Image 
from ServiceProvider.serialize import ServiceProviderSerializer,ImageSerializer
from ServiceProvider.filter import ServiceProviderFilter
from rest_framework.decorators import api_view  
from rest_framework.response import Response

# from ServiceProvider.serializers2 import TestSerializer


class ServiceProviderList(generics.ListCreateAPIView):
    queryset=ServiceProvider.objects.all()
    serializer_class=ServiceProviderSerializer

class ImageList(generics.ListCreateAPIView):
    queryset=Image.objects.all()
    serializer_class=ImageSerializer

# class TestList(generics.ListAPIView):
#     queryset=Image.objects.all()
#     serializer_class=TestSerializer



@api_view(['POST'])
def servProv(request):
    servProvider = ServiceProvider.objects.all().filter(provider=request.data['provider'])
    seralizer = ServiceProviderSerializer(servProvider,many=True)

    return Response (seralizer.data)

# class CategoryProviderList(generics.ListCreateAPIView):
#     queryset=CategoryProvider.objects.all()
#     serializer_class=CategoryProviderSerializer

