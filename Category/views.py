from django.shortcuts import render
from rest_framework import generics   # for post and get 
from Category.models import Category
from Category.serialize import CategorySerializer,JustCategorySerializer
from Category.filter import CategoryFilter
from rest_framework.decorators import api_view  
from rest_framework.response import Response

class CategoryList(generics.ListCreateAPIView):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer

class JustCategoryList(generics.ListCreateAPIView):
    queryset=Category.objects.all()
    serializer_class=JustCategorySerializer

@api_view(['POST'])
def ProvCat(request):
    category = Category.objects.all().filter(catName=request.data['catName'])
    
    # cat=city.objects.all().filter(catname=city.serviceproviders['catename'])
    seralizer = CategorySerializer(category,many=True)
    # ids_to_get = [1]
    # res = [item for item in seralizer.data if item.get('pk') in ids_to_get]
    # print("heyyyyyyyyyyyyyyyyyyy:",res)
    return Response (seralizer.data)
# {"name":"Nablus","catName":"Electricians"}