from django.shortcuts import render
from rest_framework import generics   # for post and get 
from Category.models import Category
from Category.serialize import CategorySerializer


class CategoryList(generics.ListCreateAPIView):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer
