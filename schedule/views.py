from django.shortcuts import render
from rest_framework import generics  
from schedule.models import Schedule
from schedule.serialize import ScheduleSerializer


class ScheduleList(generics.ListCreateAPIView):
    queryset=Schedule.objects.all()
    serializer_class=ScheduleSerializer