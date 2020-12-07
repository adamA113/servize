from rest_framework import serializers
from Reviews.models import Reviews

class  ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Reviews
        fields=('stars','user','servicProvider')


