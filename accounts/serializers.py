from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model
from ServiceProvider.serialize  import ServiceProviderSerializer
from User.serialize import UserSerializer
User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ['id', 'email', 'name', 'password','is_serviceProvider']


class UserSerialize(serializers.ModelSerializer):
    Provider = ServiceProviderSerializer(read_only=True)
    user = UserSerializer(read_only=True)
    class Meta:
        model = User
        fields = ('id','pk' ,'email' , 'name', 'provider', "user" )