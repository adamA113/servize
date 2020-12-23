from django.shortcuts import render
from rest_framework import generics  
from Reviews.models import Reviews
from Reviews.serialize import ReviewsSerializer

class ReviewsList(generics.ListCreateAPIView):
    queryset=Reviews.objects.all()
    serializer_class=ReviewsSerializer

    # def get_queryset(self):
    #     return Reviews.objects.annotate(avg_rating=Avg('rating')).order_by('-avg_rating')