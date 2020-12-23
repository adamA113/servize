from django.shortcuts import render
from rest_framework import generics
from Location.models import City
from Location.serialize import CitySerializer,JustCitySerializer
from Location.filter import CityFilter
from rest_framework.decorators import api_view  
from rest_framework.response import Response
# from django.contrib.auth.decorators import login_required

class CityList(generics.ListCreateAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer

class JustCityList(generics.ListCreateAPIView):
    queryset = City.objects.all()
    serializer_class = JustCitySerializer

# class AreaList(generics.ListCreateAPIView):
#     queryset=Area.objects.all()
#     serializer_class=AreaSerializer

# @login_required
@api_view(['POST'])
def ProvLoc(request):
    city = City.objects.all().filter(name=request.data['name'])
    seralizer = CitySerializer(city,many=True)

    return Response (seralizer.data)
# {"name":"Nablus","categories":"Electricians"}
