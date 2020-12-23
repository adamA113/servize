from django.urls import path
from ServiceProvider.views import ServiceProviderList,ImageList,servProv

app_name='ServiceProvider'


urlpatterns=[
    path('',ServiceProviderList.as_view()),
    path('images/',ImageList.as_view()),
    path('servProv/',servProv)
 ]
