from django.shortcuts import render
from rest_framework import generics  
from SubCategory.models import SubCategory
from SubCategory.serialize import SubCategorySerializer


class SubCategoryList(generics.ListCreateAPIView):
    queryset=SubCategory.objects.all()
    serializer_class=SubCategorySerializer


