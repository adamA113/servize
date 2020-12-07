from django.urls import path
from User.views import UserList

app_name='User'


urlpatterns=[
    path('',UserList.as_view())
 ]
