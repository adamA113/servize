from rest_framework import serializers
from SubCategory.models import SubCategory

class  SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=SubCategory
        fields=('subName','subImage','category')


