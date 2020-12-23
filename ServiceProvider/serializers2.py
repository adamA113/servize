from rest_framework import serializers
from schedule.models import Schedule
from schedule.serialize import ScheduleSerializer

class  TestSerializer(serializers.ModelSerializer):
    events=ScheduleSerializer(many=True, read_only=True)
    class Meta:
        model=Schedule
        fields=  ('events')