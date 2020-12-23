from django.urls import path 
from users.views import UserList

app_name = 'users'

urlpatterns = [
    path('' ,UserList.as_view() ),
   
]