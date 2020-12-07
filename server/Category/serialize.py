from rest_framework import serializers
from Category.models import Category

class  CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=('catName','catImage','pk')
