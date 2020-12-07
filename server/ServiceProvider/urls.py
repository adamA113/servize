from django.urls import path
from ServiceProvider.views import ServiceProviderList,ImageList,CategoryProviderList

app_name='ServiceProvider'


urlpatterns=[
    path('',ServiceProviderList.as_view())
 ]
