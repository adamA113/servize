from django.urls import path
from schedule.views import ScheduleList

app_name='schedule'


urlpatterns=[
    path('',ScheduleList.as_view()),
    
 ]