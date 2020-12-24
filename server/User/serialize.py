from rest_framework import serializers
from User.models import User,ProviderUser


class ProviderUserSerializer(serializers.ModelSerializer):
    providerName = serializers.CharField(source='providerId.provider.name', read_only=True)
    # providerName = serializers.CharField(source='providerId.provider.id', read_only=True)
    userName=serializers.CharField(source='userId.user.name', read_only=True)

    class Meta:
        model=ProviderUser
        fields=('providerName','userName')




class  UserSerializer(serializers.ModelSerializer):
    # name = serializers.CharField(source="user.name",read_only=True)
    email = serializers.CharField(source="user",read_only=True)
    providers = ProviderUserSerializer(many=True, read_only=True)
    name = serializers.CharField(source="user.name",read_only=True)
    
    class Meta:
        model=User
        fields=('id','pk','image','role','user','email','name','providers','phone')



