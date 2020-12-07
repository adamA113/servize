from rest_framework import serializers
from Location.models import City,Area

class  CitySerializer(serializers.ModelSerializer):
    class Meta:
        model=City
        fields=('name','pk')

class  AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Area
        fields=('name','City','pk')

