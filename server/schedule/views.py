from django.shortcuts import render
from rest_framework import generics  
from schedule.models import Schedule
from schedule.serialize import ScheduleSerializer
from schedule.filter import ScheduleFilter
from rest_framework.decorators import api_view  
from rest_framework.response import Response
# from django.contrib.auth.decorators import login_required

class ScheduleList(generics.ListCreateAPIView):
    queryset=Schedule.objects.all()
    serializer_class=ScheduleSerializer

    
# @login_required
@api_view(['POST'])
def Book(request):
    book = Schedule.objects.all().filter(provider=request.data['provider'])
    seralizer = ScheduleSerializer(book,many=True)

    return Response (seralizer.data)