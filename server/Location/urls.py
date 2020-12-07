from django.urls import path
from Location.views import CityList,AreaList

app_name='Location'


urlpatterns=[
    path('city/',CityList.as_view()),
    path('city/area/',AreaList.as_view())
 ]
