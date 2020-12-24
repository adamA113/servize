from rest_framework import serializers
from schedule.models import Schedule
from ServiceProvider.serialize import ServiceProviderSerializer
from User.serialize import UserSerializer
from ServiceProvider.models import ServiceProvider
from User.models import User
class  ScheduleSerializer(serializers.ModelSerializer):
    userName = serializers.CharField(source='user',read_only=True )
    providerName = serializers.CharField(source='provider',read_only=True )
    class Meta:
        model=Schedule
        fields=['user','userName','provider','providerName','bookDate','Subject']