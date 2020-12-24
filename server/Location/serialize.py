from rest_framework import serializers
from Location.models import City
from ServiceProvider.serialize import ServiceProviderSerializer
from Category.serialize import CategorySerializer

class  CitySerializer(serializers.ModelSerializer):
    serviceProviders = ServiceProviderSerializer(many=True, read_only=True)
    # catProviders = CategorySerializer(source='categories',many=True,read_only=True)
    # catname = serializers.CharField(source='categoryId',read_only=True )

    class Meta:
        model=City
        fields=['name','pk','serviceProviders']
         
class  JustCitySerializer(serializers.ModelSerializer):
    class Meta:
        model=City
        fields=['name','pk']

# class  AreaSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=Area
#         fields=('name','City','pk')

