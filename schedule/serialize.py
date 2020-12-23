from rest_framework import serializers
from schedule.models import Schedule
from ServiceProvider.serialize import ServiceProviderSerializer
from User.serialize import UserSerializer
from ServiceProvider.models import ServiceProvider
from User.models import User
class  ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model=Schedule
        fields=['user','provider','bookDate','Subject']