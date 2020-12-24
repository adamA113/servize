from django.urls import path
from schedule.views import ScheduleList, Book

app_name='schedule'


urlpatterns=[
    path('',ScheduleList.as_view()),
    path('book/',Book)
 ]